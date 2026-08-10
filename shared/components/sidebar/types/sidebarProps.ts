/* TYPES */
import { UserData } from "@/app/(dashboard)/layout";
import { LinkSidebar } from "./linkSidebar";

export type SidebarProps = {
  links: LinkSidebar[];
  userData: UserData | null;
  logoutAction: () => Promise<void>;
  goToProfileAction: () => void;
  isInProfilePage: boolean;
};
