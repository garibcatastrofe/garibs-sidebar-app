"use client";

/* ANIMATION */
import { motion } from "framer-motion";

/* COMPONENTS */
import {
  Sidebar,
  LinkSidebar,
  UserData,
} from "@/shared/components/sidebar/Sidebar";

/* ICONS */
import { Home, UsersRound } from "lucide-react";

/* NAVIGATION */
import { useRouter } from "next/navigation";

/* STORES */
import { useSidebarStore } from "@/shared/components/sidebar/stores/sidebar.store";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const expanded = useSidebarStore((s) => s.expanded);

  const links: LinkSidebar[] = [
    {
      label: "Inicio",
      href: "/",
      icon: Home,
    },
    {
      label: "Usuarios",
      href: "/users",
      icon: UsersRound,
    },
  ];

  const userData: UserData | null = {
    name: "Pirita Dreemurr",
    email: "pirita@gmail.com",
    profile_photo_url: null,
  };

  return (
    <motion.div
      className="relative flex overflow-x-hidden overflow-y-hidden min-h-dvh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Sidebar
        links={links}
        userData={userData}
        logoutAction={async () => {}}
        goToProfileAction={() => router.push("/profile")}
      />
      <div
        className={`flex flex-col h-dvh w-full transition-all duration-300 ${
          expanded
            ? "lg:left-64 lg:w-[calc(100%-16rem)]"
            : "lg:left-16 lg:w-[calc(100%-4rem)] z-40"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}
