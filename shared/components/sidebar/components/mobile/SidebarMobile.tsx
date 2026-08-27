"use client";

/* COMPONENTS */
import { RouteTitle } from "./routeTitle/RouteTitle";
import { SidebarMobileOverlay } from "./sidebarMobileOverlay/SidebarMobileOverlay";
import { SidebarFooter } from "../shared/sidebarFooter/SidebarFooter";

/* HOOKS */
import { useMounted } from "@/shared/hooks/useMounted";

/* ICONS */
import { ChevronsLeft } from "lucide-react";
import { LogoIcon } from "@/shared/icons/logo/LogoIcon";

/* NAVIGATION */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* STORES */
import { useSidebarStore } from "../../stores/sidebar.store";

/* TYPES */
import { SidebarProps } from "../../types/sidebarProps";

/* UTILS */
import { getLinkStyles } from "../../utils/getLinkStyles";

export function SidebarMobile({
  links,
  userData,
  logoutAction,
  goToProfileAction,
}: SidebarProps) {
  const pathname = usePathname();

  const expanded = useSidebarStore((s) => s.expanded);
  const toggleSidebar = useSidebarStore((s) => s.toggleSidebar);

  const { mounted } = useMounted();

  if (!mounted) return null;

  return (
    <>
      <RouteTitle links={links} />
      <aside
        className={`flex flex-col z-60 transition-all bg-background duration-300 justify-between h-dvh border-r border-r-line absolute w-64 top-0 ${expanded ? "left-0" : "-left-64"}`}
      >
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center mb-16 relative px-4 pt-4 justify-end">
            <div className="transition-all duration-300 pointer-events-none absolute w-24 left-4">
              <LogoIcon />
            </div>
            <button
              onClick={toggleSidebar}
              className="p-1 hover:bg-surface hover:border-line border-transparent border rounded transition-all duration-300 cursor-pointer"
            >
              <ChevronsLeft className="size-4 min-h-4 min-w-4" />
            </button>
          </div>

          <div className="flex flex-col items-center h-full gap-2 overflow-hidden px-4 pb-4">
            {links.map((link) => {
              if (link.label === "Perfil") return;

              return (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={toggleSidebar}
                  className={`px-[0.70rem] py-2 rounded-xl flex relative items-center w-full gap-6 ${getLinkStyles(link.href, pathname)}`}
                >
                  <link.icon className="size-4 min-w-4 min-h-4" />

                  <span className="text-sm transition-all duration-300 w-full">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <SidebarFooter
          userData={userData}
          goToProfileAction={goToProfileAction}
          logoutAction={logoutAction}
          sideOffset={8}
          alignOffset={16}
          side="top"
        />
      </aside>
      <SidebarMobileOverlay />
    </>
  );
}
