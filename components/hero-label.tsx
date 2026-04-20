import type { ReactNode } from "react";

type HeroLabelProps = {
  icon: ReactNode;
  children: ReactNode;
};

export function HeroLabel({ icon, children }: HeroLabelProps) {
  return (
    <div className="hero-label">
      <span className="hero-label-svg" aria-hidden>
        {icon}
      </span>
      <span>{children}</span>
    </div>
  );
}
