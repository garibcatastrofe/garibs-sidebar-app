"use client";

/* COMPONENTS */
import Image from "next/image";

/* ICONS */
import { ChevronsUpDown, UserRound } from "lucide-react";

/* LIBS */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

/* NAVIGATION */
import { usePathname } from "next/navigation";

/* TYPES */
import { UserData } from "@/features/users/types/user.types";

export function SidebarFooterTrigger() {
  const pathname = usePathname();
  const isInProfilePage = pathname === "/profile";

  // Puede venir de un store de authentication
  const userData: UserData | null = {
    name: "Pirita Dreemurr",
    email: "pirita@gmail.com",
    profile_photo_url: null,
  };

  return (
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
            <UserRound className="size-4" />
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
  );
}
