"use client";

/* ANIMATION */
import { motion } from "framer-motion";

/* COMPONENTS */
import { SidebarDesktop } from "@/shared/components/sidebar/components/sidebarDesktop/SidebarDesktop";
import { SidebarMobile } from "@/shared/components/sidebar/components/sidebarMobile/SidebarMobile";

/* HOOKS */
import { useState, useEffect } from "react";

/* ICONS */
import { Home, UserRound, UsersRound } from "lucide-react";

/* NAVIGATION */
import { useRouter, usePathname } from "next/navigation";

/* STORES */
import { useSidebarStore } from "@/shared/components/sidebar/stores/sidebar.store";

/* TYPES */
import { LinkSidebar } from "@/shared/components/sidebar/types/linkSidebar";

export type UserData = {
  name: string;
  email: string;
  profile_photo_url: string | null;
};

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const expanded = useSidebarStore((s) => s.expanded);

  const [isMobile, setIsMobile] = useState(false);

  const links: LinkSidebar[] = [
    {
      label: "Inicio",
      href: "/home",
      icon: Home,
    },
    {
      label: "Usuarios",
      href: "/users",
      icon: UsersRound,
    },
    {
      label: "Perfil",
      href: "/profile",
      icon: UserRound,
    },
  ];

  const userData: UserData | null = {
    name: "Pirita Dreemurr",
    email: "pirita@gmail.com",
    profile_photo_url: null,
  };

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");

    const update = () => setIsMobile(media.matches);

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      className="relative lg:flex overflow-x-hidden overflow-y-hidden min-h-dvh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {!isMobile && (
        <SidebarDesktop
          links={links}
          userData={userData}
          logoutAction={async () => router.push("/")}
          goToProfileAction={() => router.push("/profile")}
          isInProfilePage={pathname === "/profile"}
        />
      )}
      <div
        className={`flex flex-col h-dvh w-full transition-all duration-300 ${
          expanded
            ? "lg:left-64 lg:w-[calc(100%-16rem)]"
            : "lg:left-16 lg:w-[calc(100%-4rem)] z-40"
        }`}
      >
        {isMobile && (
          <SidebarMobile
            links={links}
            userData={userData}
            logoutAction={async () => router.push("/")}
            goToProfileAction={() => router.push("/profile")}
            isInProfilePage={pathname === "/profile"}
          />
        )}
        {children}
      </div>
    </motion.div>
  );
}
