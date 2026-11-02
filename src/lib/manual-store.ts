import { create } from "zustand";
import type { Lang } from "@/content/catalog";

type ManualState = {
  lang: Lang;
  query: string;
  navOpen: boolean;
  setLang: (lang: Lang) => void;
  setQuery: (query: string) => void;
  setNavOpen: (open: boolean) => void;
};

export const useManual = create<ManualState>((set) => ({
  lang: "en",
  query: "",
  navOpen: false,
  setLang: (lang) => {
    if (typeof window !== "undefined") window.localStorage.setItem("aster-lang", lang);
    set({ lang });
  },
  setQuery: (query) => set({ query }),
  setNavOpen: (navOpen) => set({ navOpen }),
}));
