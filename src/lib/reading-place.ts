import { useEffect } from "react";
import { useRouter, type AnyRouter } from "@tanstack/react-router";

type Place = {
  y: number;
  anchor?: string;
  delta?: number;
};

type Armed = Place | { hash: string } | "top";

const places = new Map<string, Place>();
const STORAGE = "aster-place-v1";

let restoreGen = 0;
let locking = false;
let applying = 0;
let armed: Armed | null = null;
let timers: number[] = [];

function historyKey(state: unknown): string | undefined {
  if (!state || typeof state !== "object") return undefined;
  const record = state as Record<string, unknown>;
  const key = record.__TSR_key ?? record.key;
  return typeof key === "string" ? key : undefined;
}

function historyIndex(state: unknown): number | undefined {
  if (!state || typeof state !== "object") return undefined;
  const index = (state as Record<string, unknown>).__TSR_index;
  return typeof index === "number" ? index : undefined;
}

function capture(): Place {
  const y = window.scrollY;
  const nodes = document.querySelectorAll<HTMLElement>("h1[id], h2[id], h3[id], h4[id]");
  let anchor: string | undefined;
  let delta = 0;
  for (const node of nodes) {
    const top = node.getBoundingClientRect().top;
    if (top > 96) break;
    anchor = node.id;
    delta = top;
  }
  return anchor ? { y, anchor, delta } : { y };
}

function remember(key: string | undefined, place: Place): void {
  if (!key) return;
  places.set(key, place);
  if (places.size > 60) {
    const oldest = places.keys().next().value;
    if (oldest) places.delete(oldest);
  }
}

function persist(): void {
  try {
    const entries = [...places.entries()].slice(-40);
    sessionStorage.setItem(STORAGE, JSON.stringify(entries));
  } catch {
    // private mode or a full quota — back still works for this page lifetime
  }
}

function hydrate(): void {
  try {
    const raw = sessionStorage.getItem(STORAGE);
    if (!raw) return;
    const entries = JSON.parse(raw) as [string, Place][];
    for (const [key, place] of entries) {
      if (typeof key === "string" && place && typeof place.y === "number") places.set(key, place);
    }
  } catch {
    // ignore a damaged snapshot
  }
}

function withoutSmoothScroll(run: () => void): void {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  try {
    run();
  } finally {
    root.style.scrollBehavior = previous;
  }
}

function apply(target: Armed): void {
  applying += 1;
  withoutSmoothScroll(() => {
    if (target === "top") {
      window.scrollTo(0, 0);
      return;
    }
    if ("hash" in target) {
      const node = document.getElementById(target.hash);
      if (node) node.scrollIntoView({ block: "start", behavior: "auto" });
      return;
    }
    if (target.anchor) {
      const node = document.getElementById(target.anchor);
      if (node) {
        const docTop = node.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, Math.max(0, docTop - (target.delta ?? 0)));
        return;
      }
    }
    window.scrollTo(0, Math.max(0, target.y));
  });
  requestAnimationFrame(() => {
    applying = Math.max(0, applying - 1);
  });
}

function clearTimers(): void {
  for (const timer of timers) window.clearTimeout(timer);
  timers = [];
}

function finish(): void {
  clearTimers();
  locking = false;
  armed = null;
}

export function notifyContentReady(): void {
  if (!armed || armed === "top") return;
  apply(armed);
}

function arm(target: Armed, attempts = [0, 40, 140, 320, 700, 1200, 2000], life = 8000): void {
  restoreGen += 1;
  const gen = restoreGen;
  clearTimers();
  locking = true;
  armed = target;
  apply(target);
  const run = () => {
    if (gen !== restoreGen) return;
    apply(target);
  };
  attempts.forEach((delay) => {
    timers.push(window.setTimeout(run, delay));
  });
  timers.push(
    window.setTimeout(() => {
      if (gen !== restoreGen) return;
      finish();
    }, life),
  );
}

function cancelForUser(): void {
  if (!locking) return;
  restoreGen += 1;
  finish();
  remember(historyKey(history.state), capture());
}

export function installReadingPlace(router: AnyRouter): () => void {
  if (typeof window === "undefined") return () => {};
  history.scrollRestoration = "manual";
  hydrate();

  const onScroll = (event: Event) => {
    if (!event.isTrusted || applying || locking) return;
    remember(historyKey(history.state), capture());
  };

  const onHide = () => {
    if (!locking) remember(historyKey(history.state), capture());
    persist();
  };

  const cancelEvents: Array<[keyof WindowEventMap, (event: Event) => void]> = [
    ["wheel", cancelForUser],
    ["touchmove", cancelForUser],
  ];

  const onKey = (event: KeyboardEvent) => {
    if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) cancelForUser();
  };

  const offBefore = router.subscribe("onBeforeNavigate", (event) => {
    remember(historyKey(event.fromLocation?.state), capture());
  });

  const offRendered = router.subscribe("onRendered", (event) => {
    const toKey = historyKey(event.toLocation.state);
    const fromIndex = historyIndex(event.fromLocation?.state);
    const toIndex = historyIndex(event.toLocation.state);
    const hash = event.toLocation.hash || "";
    if (!event.fromLocation) return;
    const delta =
      typeof fromIndex === "number" && typeof toIndex === "number" ? toIndex - fromIndex : 0;
    const known = typeof toKey === "string" && places.has(toKey) ? places.get(toKey) : undefined;
    if (known && delta < 0) {
      arm(known);
      return;
    }
    if (known && delta > 0 && !hash) {
      arm(known);
      return;
    }
    if (hash) {
      let decoded = hash;
      try {
        decoded = decodeURIComponent(hash);
      } catch {
        decoded = hash;
      }
      arm({ hash: decoded });
      return;
    }
    if (event.hrefChanged) arm("top", [0, 80], 400);
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("pagehide", onHide);
  window.addEventListener("keydown", onKey);
  for (const [type, handler] of cancelEvents) window.addEventListener(type, handler, { passive: true });

  return () => {
    finish();
    offBefore();
    offRendered();
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("pagehide", onHide);
    window.removeEventListener("keydown", onKey);
    for (const [type, handler] of cancelEvents) window.removeEventListener(type, handler);
    persist();
  };
}

export function ReadingPlace() {
  const router = useRouter();
  useEffect(() => installReadingPlace(router), [router]);
  return null;
}
