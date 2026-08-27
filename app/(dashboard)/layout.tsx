"use client";

/* ANIMATION */
import { motion } from "framer-motion";

/* COMPONENTS */
import { SidebarDesktop } from "@/shared/components/sidebar/components/desktop/SidebarDesktop";
import { SidebarMobile } from "@/shared/components/sidebar/components/mobile/SidebarMobile";

/* HOOKS */
import { useMedia } from "@/shared/hooks/useMedia";

/* STORES */
import { useSidebarStore } from "@/shared/components/sidebar/stores/sidebar.store";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const expanded = useSidebarStore((s) => s.expanded);

  const { isMobile } = useMedia();

  return (
    <motion.div
      className="relative lg:flex overflow-x-hidden overflow-y-hidden min-h-dvh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {!isMobile && <SidebarDesktop />}
      <div
        className={`flex flex-col h-dvh w-full transition-all duration-300 ${
          expanded
            ? "lg:left-64 lg:w-[calc(100%-16rem)]"
            : "lg:left-16 lg:w-[calc(100%-4rem)] z-40"
        }`}
      >
        {isMobile && <SidebarMobile />}
        {children}
      </div>
    </motion.div>
  );
}
