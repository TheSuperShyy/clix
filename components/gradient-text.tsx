import type { ReactNode } from "react";

export function GradientText({ children }: { children: ReactNode }) {
  return <span className="span-h1-gradient">{children}</span>;
}
