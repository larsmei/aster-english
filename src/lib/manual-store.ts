import { create } from "zustand";
import type { Lang } from "@/content/catalog";
import { applyNavWidth, applyTheme, type ThemeId } from "@/lib/themes";

type ManualState = {
  lang: Lang;
  query: string;
  navOpen: boolean;
  theme: ThemeId;
  navWidth: number;
  setLang: (lang: Lang) => void;
  setQuery: (query: string) => void;
  setNavOpen: (open: boolean) => void;
  setTheme: (theme: ThemeId) => void;
  setNavWidth: (width: number) => void;
};

export const useManual = create<ManualState>((set) => ({
  lang: "en",
  query: "",
  navOpen: false,
  theme: "paper",
  navWidth: 240,
  setLang: (lang) => {
    if (typeof window !== "undefined") window.localStorage.setItem("aster-lang", lang);
    set({ lang });
  },
  setQuery: (query) => set({ query }),
  setNavOpen: (navOpen) => set({ navOpen }),
  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("aster-theme", theme);
      applyTheme(theme);
    }
    set({ theme });
  },
  setNavWidth: (navWidth) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("aster-nav", String(navWidth));
      applyNavWidth(navWidth);
    }
    set({ navWidth });
  },
}));
