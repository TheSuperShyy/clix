import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type GlassButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  icon?: ReactNode;
  variant?: "primary" | "header";
};

export function GlassButton({
  href,
  children,
  external,
  icon,
  variant = "primary",
}: GlassButtonProps) {
  const target = external ? "_blank" : undefined;
  const rel = external ? "noopener noreferrer" : undefined;

  if (variant === "header") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="glass-outline is-label btn-header-glass"
      >
        <span className="relative z-[2]">{children}</span>
      </a>
    );
  }

  return (
    <span className="btn-wrap position-relative inline-block">
      <a
        href={href}
        target={target}
        rel={rel}
        className="glass-outline is-label btn-glass"
      >
        <span className="relative z-[2]">{children}</span>
        <span className="arrow relative z-[2]" aria-hidden>
          {icon ?? <ArrowRight color="white" strokeWidth={2.5} />}
        </span>
      </a>
      <span className="btn-glow" />
    </span>
  );
}
