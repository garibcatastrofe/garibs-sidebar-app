"use client";

/* COMPONENTS */
import { SidebarFooterTrigger } from "./sidebarFooterTrigger/SidebarFooterTrigger";
import { SidebarFooterView } from "./sidebarFooterView/SidebarFooterView";

/* HOOKS */
import { useState } from "react";

/* LIBS */
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function SidebarFooter({
  goToProfileAction,
  sideOffset,
  alignOffset,
  side,
}: {
  goToProfileAction: () => void;
  sideOffset: number;
  alignOffset: number;
  side: "right" | "top" | "bottom" | "left";
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <SidebarFooterTrigger />
      <SidebarFooterView
        open={open}
        goToProfileAction={goToProfileAction}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        side={side}
      />
    </DropdownMenu.Root>
  );
}
