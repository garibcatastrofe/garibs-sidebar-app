"use client";

/* ANIMATION */
import { AnimatePresence, motion } from "framer-motion";

/* COMPONENTS */
import Image from "next/image";
import { RouteTitle } from "../routeTitle/RouteTitle";

/* HOOKS */
import { useState, useEffect } from "react";

/* ICONS */
import { LogOut, ChevronsLeft, UserRound, ChevronsUpDown } from "lucide-react";
import { LogoIcon } from "@/shared/icons/logo/LogoIcon";

/* NAVIGATION */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* LIBS */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

/* STORES */
import { useSidebarStore } from "../../stores/sidebar.store";

/* TYPES */
import { SidebarProps } from "../../types/sidebarProps";

/* UTILS */
import { getLinkStyles } from "../../utils/getLinkStyles";
import { ThemeButtons } from "../themeButtons/ThemeButtons";

export function SidebarMobile({
  links,
  userData,
  logoutAction,
  goToProfileAction,
  isInProfilePage,
}: SidebarProps) {
  const pathname = usePathname();

  const expanded = useSidebarStore((s) => s.expanded);
  const toggleSidebar = useSidebarStore((s) => s.toggleSidebar);

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const changeTheme = () => {
      setMounted(true);
    };

    changeTheme();
  }, []);

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

        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger asChild>
            <button className="flex items-center w-full gap-4 p-4 overflow-hidden transition-all duration-300 border-t outline-none cursor-pointer hover:bg-surface border-t-line">
              <div
                className={`rounded-full w-10 h-10 min-w-10 min-h-10 flex justify-center items-center bg-surface border relative ${isInProfilePage ? "border-primary" : "border-line"}`}
              >
                {userData && userData?.profile_photo_url ? (
                  <Image
                    alt="Banner"
                    src={userData.profile_photo_url}
                    quality={70}
                    fill
                    loading="eager"
                    className="object-cover object-center rounded-full"
                  />
                ) : (
                  <UserRound className="size-4 min-h-4 min-w-4" />
                )}
              </div>

              <div className="flex flex-col flex-1 min-w-0 text-left">
                <span className="text-sm font-semibold truncate">
                  {userData?.name ?? "..."}
                </span>

                <span className="text-xs truncate text-muted">
                  {userData?.email ?? "..."}
                </span>
              </div>

              <div className="shrink-0">
                <ChevronsUpDown className="size-4 min-w-4 min-h-4" />
              </div>
            </button>
          </DropdownMenu.Trigger>

          <AnimatePresence>
            {open && (
              <DropdownMenu.Portal forceMount>
                <DropdownMenu.Content
                  sideOffset={8}
                  align="end"
                  alignOffset={16}
                  avoidCollisions
                  side={"top"}
                  asChild
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -6 }}
                    animate={{ opacity: 1, scale: 1, y: -12 }}
                    exit={{ opacity: 0, scale: 0.95, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="p-2 border shadow-md z-100 min-w-56 rounded-2xl border-line bg-background"
                  >
                    <DropdownMenu.Item
                      onClick={() => {
                        toggleSidebar();
                        goToProfileAction();
                      }}
                      className={`flex items-center gap-3 rounded-xl p-2 text-sm outline-none cursor-pointer mb-2 transition-colors duration-300 border ${isInProfilePage ? "bg-surface/70 border-line text-primary" : "hover:bg-surface border-transparent text-body"}`}
                    >
                      <UserRound className="size-4 min-h-4 min-w-4" />
                      Perfil
                    </DropdownMenu.Item>

                    <ThemeButtons />

                    <DropdownMenu.Item
                      onClick={logoutAction}
                      className="flex items-center gap-3 p-2 text-sm mt-2 transition-colors duration-300 outline-none cursor-pointer rounded-xl text-danger hover:bg-danger/10"
                    >
                      <LogOut className="size-4 min-h-4 min-w-4" />
                      Cerrar sesión
                    </DropdownMenu.Item>
                  </motion.div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            )}
          </AnimatePresence>
        </DropdownMenu.Root>
      </aside>
      <div
        onClick={toggleSidebar}
        className={`absolute w-full top-0 left-0 bg-black/50 h-screen transition-all duration-300 z-50 lg:hidden lg:pointer-events-none ${
          expanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </>
  );
}
