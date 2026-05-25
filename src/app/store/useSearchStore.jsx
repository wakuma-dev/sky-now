import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSearchStore = create(
  persist(
    (set) => ({
      query: "",
      results: [],
      isLoading: false,

      setQuery: (value) => set({ query: value }),

      setResults: (value) => set({ results: value }),

      setIsLoading: (value) => set({ isLoading: value }),
    }),
    {
      name: "search-storage",
    },
  ),
);

export default useSearchStore;
