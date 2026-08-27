/* ICONS */
import { Home, UserRound, UsersRound } from "lucide-react";

/* TYPES */
import { LinkSidebar } from "@/shared/components/sidebar/types/linkSidebar";

export const links: LinkSidebar[] = [
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
