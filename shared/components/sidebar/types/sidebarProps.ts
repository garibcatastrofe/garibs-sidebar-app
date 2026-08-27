/* TYPES */
import { UserData } from "@/features/users/types/user.types";
import { LinkSidebar } from "./linkSidebar";

export type SidebarProps = {
  links: LinkSidebar[];
  userData: UserData | null;
  logoutAction: () => Promise<void>;
  goToProfileAction: () => void;
};
