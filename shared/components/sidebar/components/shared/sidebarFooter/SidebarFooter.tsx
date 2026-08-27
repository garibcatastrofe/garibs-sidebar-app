"use client";

/* COMPONENTS */
import { SidebarFooterTrigger } from "./sidebarFooterTrigger/SidebarFooterTrigger";
import { SidebarFooterView } from "./sidebarFooterView/SidebarFooterView";

/* HOOKS */
import { useState } from "react";

/* LIBS */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

/* TYPES */
import { UserData } from "@/features/users/types/user.types";

export function SidebarFooter({
  userData,
  goToProfileAction,
  logoutAction,
  sideOffset,
  alignOffset,
  side,
}: {
  userData: UserData | null;
  goToProfileAction: () => void;
  logoutAction: () => Promise<void>;
  sideOffset: number;
  alignOffset: number;
  side: "right" | "top" | "bottom" | "left";
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <SidebarFooterTrigger userData={userData} />
      <SidebarFooterView
        open={open}
        goToProfileAction={goToProfileAction}
        logoutAction={logoutAction}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        side={side}
      />
    </DropdownMenu.Root>
  );
}
