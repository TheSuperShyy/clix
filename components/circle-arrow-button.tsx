"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  direction: "prev" | "next";
  disabled?: boolean;
  onClick?: () => void;
  label: string;
};

export function CircleArrowButton({
  direction,
  disabled,
  onClick,
  label,
}: Props) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      className={`circle-arrow${disabled ? " is-disabled" : ""}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
    >
      <Icon strokeWidth={2} />
    </button>
  );
}
