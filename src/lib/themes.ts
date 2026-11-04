export const THEMES = [
  { id: "paper", en: "Paper", fr: "Papier" },
  { id: "sepia", en: "Sepia", fr: "Sépia" },
  { id: "daylight", en: "Daylight", fr: "Jour" },
  { id: "grove", en: "Grove", fr: "Sous-bois" },
  { id: "slate", en: "Slate", fr: "Ardoise" },
  { id: "night", en: "Night", fr: "Nuit" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

export const NAV_MIN = 200;
export const NAV_MAX = 520;
export const NAV_DEFAULT = 240;

export function isTheme(value: string | null): value is ThemeId {
  return THEMES.some((item) => item.id === value);
}

export function clampNav(value: number): number {
  if (!Number.isFinite(value)) return NAV_DEFAULT;
  return Math.min(NAV_MAX, Math.max(NAV_MIN, Math.round(value)));
}

export function applyTheme(theme: ThemeId): void {
  const root = document.documentElement;
  if (theme === "paper") delete root.dataset.theme;
  else root.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const bg = getComputedStyle(root).getPropertyValue("--color-bg").trim();
    if (bg) meta.setAttribute("content", bg);
  }
}

export function applyNavWidth(px: number): void {
  document.documentElement.style.setProperty("--nav-width", `${clampNav(px)}px`);
}

export function readNavWidth(): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--nav-width").trim();
  const n = Number.parseFloat(raw);
  if (!Number.isFinite(n)) return NAV_DEFAULT;
  if (raw.endsWith("rem")) return clampNav(n * 16);
  return clampNav(n);
}
