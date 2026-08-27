"use client";

/* ANIMATION */
import { AnimatePresence, motion } from "framer-motion";

/* COMPONENTS */
import { ThemeButtons } from "../../themeButtons/ThemeButtons";

/* ICONS */
import { LogOut, UserRound } from "lucide-react";

/* LIBS */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

/* NAVIGATION */
import { usePathname } from "next/navigation";

export function SidebarFooterView({
  open,
  goToProfileAction,
  sideOffset,
  alignOffset,
  side,
}: {
  open: boolean;
  goToProfileAction: () => void;
  sideOffset: number;
  alignOffset: number;
  side: "right" | "top" | "bottom" | "left";
}) {
  const pathname = usePathname();
  const isInProfilePage = pathname === "/profile";

  // Puede venir de un store de authentication
  const logoutAction = async () => {};

  return (
    <AnimatePresence>
      {open && (
        <DropdownMenu.Portal forceMount>
          <DropdownMenu.Content
            sideOffset={sideOffset}
            align="end"
            alignOffset={alignOffset}
            avoidCollisions
            side={side}
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
                onClick={goToProfileAction}
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
  );
}
