"use client";

/* ICONS */
import { Menu } from "lucide-react";

/* NAVIGATION */
import { usePathname } from "next/navigation";

/* STORES */
import { useSidebarStore } from "../../stores/sidebar.store";

/* TYPES */
import { LinkSidebar } from "../../types/linkSidebar";

export function RouteTitle({ links }: { links: LinkSidebar[] }) {
  const pathname = usePathname();

  const toggleSidebar = useSidebarStore((s) => s.toggleSidebar);

  const segments = pathname !== null ? pathname.split("/").filter(Boolean) : [];
  const mainRoute = links.find((link) => link.href === `/${segments[0]}`);

  return (
    <header className="w-full py-6 px-4 border-b border-b-line lg:hidden">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className={`p-1 hover:bg-surface hover:text-primary border border-transparent hover:border-line rounded-xl transition-all duration-300 cursor-pointer`}
        >
          <Menu className="size-4 min-h-4 min-w-4 text-ink" />
        </button>

        <p className="text-sm text-ink font-light">
          {mainRoute?.label ?? "..."}
        </p>
      </div>
    </header>
  );
}
