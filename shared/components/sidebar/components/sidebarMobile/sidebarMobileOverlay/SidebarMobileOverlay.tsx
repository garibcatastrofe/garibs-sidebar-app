"use client";

/* STORES */
import { useSidebarStore } from "../../../stores/sidebar.store";

export function SidebarMobileOverlay() {
  const toggleSidebar = useSidebarStore((s) => s.toggleSidebar);
  const expanded = useSidebarStore((s) => s.expanded);

  return (
    <div
      onClick={toggleSidebar}
      className={`absolute w-full top-0 left-0 bg-black/50 h-screen transition-all duration-300 z-50 lg:hidden lg:pointer-events-none ${
        expanded ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    />
  );
}
