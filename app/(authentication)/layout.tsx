"use client";

/* ANIMATION */
import { motion } from "framer-motion";

export default function LayoutAuthentication({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="relative flex overflow-x-hidden overflow-y-hidden min-h-dvh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
