"use client";

/* HOOKS */
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/* ICONS */
import { Logo } from "@/shared/icons/logo/Logo";

/* TYPES */
type SpecificColors = {
  primaryColor: string;
  secondaryColor: string;
};

export function LogoIcon({ wantSpecific }: { wantSpecific?: SpecificColors }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const changeTheme = () => {
      setMounted(true);
    };

    changeTheme();
  }, []);

  if (!mounted) return null;

  return (
    <Logo
      primaryColor={
        wantSpecific
          ? wantSpecific.primaryColor
          : resolvedTheme === "dark"
            ? "#ffffff"
            : "#000000"
      }
      secondaryColor={
        wantSpecific
          ? wantSpecific.secondaryColor
          : resolvedTheme === "dark"
            ? "#22c55e"
            : "#16a34a"
      }
    />
  );
}
