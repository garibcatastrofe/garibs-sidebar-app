"use client";

/* ANIMATION */
import { AnimatePresence, motion } from "framer-motion";

/* COMPONENTS */
import { SidebarFooter } from "../shared/sidebarFooter/SidebarFooter";

/* HOOKS */
import { useState } from "react";
import { useMounted } from "@/shared/hooks/useMounted";

/* ICONS */
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { LogoIcon } from "@/shared/icons/logo/LogoIcon";

/* NAVIGATION */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* LIBS */
import * as Tooltip from "@radix-ui/react-tooltip";

/* STORES */
import { useSidebarStore } from "../../stores/sidebar.store";

/* TYPES */
import { SidebarProps } from "../../types/sidebarProps";

/* UTILS */
import { getLinkStyles } from "../../utils/getLinkStyles";

export function SidebarDesktop({
  links,
  userData,
  logoutAction,
  goToProfileAction,
}: SidebarProps) {
  const pathname = usePathname();

  const expanded = useSidebarStore((s) => s.expanded);
  const toggleSidebar = useSidebarStore((s) => s.toggleSidebar);

  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const { mounted } = useMounted();

  if (!mounted) return null;

  return (
    <aside
      className={`flex flex-col z-60 transition-all bg-background duration-300 justify-between h-dvh border-r border-r-line ${expanded ? "w-64" : "w-18"}`}
    >
      <div className="flex flex-col w-full h-full">
        <div
          className={`flex items-center mb-16 relative px-4 pt-4 ${expanded ? "justify-end" : "justify-center"}`}
        >
          <div
            className={`transition-all duration-300 pointer-events-none absolute w-24 top-4 ${expanded ? "opacity-100 left-4" : "left-0 opacity-0"}`}
          >
            <LogoIcon />
          </div>
          <button
            onClick={toggleSidebar}
            className={`p-1 hover:bg-surface hover:border-line border-transparent border rounded transition-all duration-300 cursor-pointer absolute top-4 ${expanded ? "right-4 translate-x-0" : "right-1/2 translate-x-1/2"}`}
          >
            {expanded ? (
              <ChevronsLeft className="size-4 min-h-4 min-w-4" />
            ) : (
              <ChevronsRight className="size-4 min-h-4 min-w-4" />
            )}
          </button>
        </div>

        <div className="flex flex-col items-center h-full gap-2 overflow-hidden px-4 pb-4">
          <Tooltip.Provider delayDuration={100}>
            {links.map((link) => {
              if (link.label === "Perfil") return;

              return (
                <Tooltip.Root
                  key={link.href}
                  open={!expanded && openTooltip === link.href}
                >
                  <Tooltip.Trigger asChild>
                    <Link
                      href={link.href}
                      onMouseEnter={() => {
                        if (!expanded) {
                          setOpenTooltip(link.href);
                        }
                      }}
                      onMouseLeave={() => {
                        setOpenTooltip(null);
                      }}
                      className={`px-[0.70rem] py-2 rounded-xl flex relative items-center w-full gap-6 ${getLinkStyles(link.href, pathname)}`}
                    >
                      <link.icon className="size-4 min-w-4 min-h-4" />

                      <span
                        className={`text-sm transition-all duration-300 ${
                          expanded
                            ? "w-full opacity-100"
                            : "w-0 lg:opacity-0 opacity-100 pointer-events-none"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </Tooltip.Trigger>

                  <AnimatePresence>
                    {openTooltip === link.href && !expanded && (
                      <Tooltip.Portal forceMount>
                        <Tooltip.Content asChild side="right" sideOffset={25}>
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.95,
                              x: -4,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              x: 0,
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0.95,
                              x: -4,
                            }}
                            transition={{
                              duration: 0.1,
                              ease: "easeOut",
                            }}
                            className="px-3 py-1 text-sm font-medium border rounded-full z-70 bg-background text-ink border-line"
                          >
                            {link.label}
                          </motion.div>
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    )}
                  </AnimatePresence>
                </Tooltip.Root>
              );
            })}
          </Tooltip.Provider>
        </div>
      </div>

      <SidebarFooter
        userData={userData}
        goToProfileAction={goToProfileAction}
        logoutAction={logoutAction}
        sideOffset={12}
        alignOffset={0}
        side="right"
      />
    </aside>
  );
}
