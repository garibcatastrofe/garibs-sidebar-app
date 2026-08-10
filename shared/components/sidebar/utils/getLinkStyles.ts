export const getLinkStyles = (linkHref: string, pathname: string): string => {
  const isActive =
    pathname === linkHref || pathname?.startsWith(`${linkHref}/`);
  return `${isActive ? "text-primary bg-surface border border-line" : "hover:bg-surface/70 border border-transparent text-ink"}`;
};
