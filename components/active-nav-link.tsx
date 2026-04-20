import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export function ActiveNavLink({ href, children }: Props) {
  return (
    <a href={href} className="active-state">
      <span className="text-size-16-16-14 text-color-white">{children}</span>
      <span className="active-state-circle" />
    </a>
  );
}
