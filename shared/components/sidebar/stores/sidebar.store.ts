import { create } from "zustand";

type SidebarState = {
  expanded: boolean;
  toggleSidebar: () => void;
  setSidebar: (value: boolean) => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  expanded: true,
  toggleSidebar: () => set((state) => ({ expanded: !state.expanded })),
  setSidebar: (value) => set({ expanded: value }),
}));
