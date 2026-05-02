"use client";

import { useEffect, useState, type MouseEvent } from "react";
import type { FaqItem } from "@/content/faq";

const STYLE_ID = "faq-clix-animations";
const KEYFRAMES = `
  @keyframes faq-clix-beam-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes faq-clix-pulse {
    0% { transform: scale(0.7); opacity: 0.55; }
    60% { opacity: 0.1; }
    100% { transform: scale(1.25); opacity: 0; }
  }
  @keyframes faq-clix-meter {
    0%, 20% { transform: scaleX(0); transform-origin: left; }
    45%, 60% { transform: scaleX(1); transform-origin: left; }
    80%, 100% { transform: scaleX(0); transform-origin: right; }
  }
  @keyframes faq-clix-tick {
    0%, 30% { transform: translateX(-6px); opacity: 0.4; }
    50% { transform: translateX(2px); opacity: 1; }
    100% { transform: translateX(20px); opacity: 0; }
  }
  .faq-clix-pill {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.85rem;
    padding: 0.55rem 1.2rem;
    border-radius: 9999px;
    overflow: hidden;
    border: 1px solid rgba(180, 100, 255, 0.22);
    background: rgba(127, 0, 255, 0.08);
    color: rgba(228, 168, 255, 0.92);
    text-transform: uppercase;
    letter-spacing: 0.35em;
    font-size: 0.65rem;
    isolation: isolate;
  }
  .faq-clix-pill__beam {
    position: absolute;
    inset: -110%;
    pointer-events: none;
    border-radius: 50%;
    background: conic-gradient(from 160deg, rgba(180, 100, 255, 0.4), transparent 32%, rgba(127, 0, 255, 0.32) 58%, transparent 78%, rgba(225, 0, 255, 0.24));
    animation: faq-clix-beam-spin 18s linear infinite;
    opacity: 0.7;
    will-change: transform;
  }
  .faq-clix-pill__pulse {
    position: absolute;
    inset: -110%;
    pointer-events: none;
    border-radius: 50%;
    border: 1px solid rgba(228, 168, 255, 0.5);
    opacity: 0.25;
    animation: faq-clix-pulse 3.4s ease-out infinite;
  }
  .faq-clix-pill__label {
    position: relative;
    z-index: 1;
    font-weight: 600;
    letter-spacing: 0.4em;
  }
  .faq-clix-pill__meter {
    position: relative;
    z-index: 1;
    width: 3rem;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(228, 168, 255, 0.85) 35%, transparent 85%);
    transform: scaleX(0);
    transform-origin: left;
    animation: faq-clix-meter 5.8s ease-in-out infinite;
    opacity: 0.7;
  }
  .faq-clix-pill__tick {
    position: relative;
    z-index: 1;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 9999px;
    background: rgba(228, 168, 255, 0.95);
    box-shadow: 0 0 0 4px rgba(127, 0, 255, 0.18);
    animation: faq-clix-tick 3.2s ease-in-out infinite;
  }
`;

export function SignalPill({ label = "Signal FAQ" }: { label?: string }) {
  return (
    <div className="faq-clix-pill" aria-label={label}>
      <span className="faq-clix-pill__beam" aria-hidden />
      <span className="faq-clix-pill__pulse" aria-hidden />
      <span className="faq-clix-pill__label">{label}</span>
      <span className="faq-clix-pill__meter" aria-hidden />
      <span className="faq-clix-pill__tick" aria-hidden />
    </div>
  );
}

type Props = { items: FaqItem[] };

export function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = KEYFRAMES;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  const setCardGlow = (event: MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
  };

  const clearCardGlow = (event: MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--faq-x");
    target.style.removeProperty("--faq-y");
  };

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-trigger-${index}`;

        return (
          <li
            key={item.q}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-colors duration-300 hover:border-white/20"
            onMouseMove={setCardGlow}
            onMouseLeave={clearCardGlow}
          >
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              style={{
                background:
                  "radial-gradient(240px circle at var(--faq-x, 50%) var(--faq-y, 50%), rgba(127,0,255,0.18), transparent 70%)",
              }}
            />
            <button
              type="button"
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
              className="relative flex w-full items-start gap-5 px-6 py-6 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgba(228,168,255,0.4)] md:px-7"
            >
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-transform duration-500 group-hover:scale-105">
                <span
                  className={`pointer-events-none absolute inset-0 rounded-full border border-white/20 ${
                    open ? "animate-ping opacity-30" : "opacity-0"
                  }`}
                />
                <svg
                  className={`relative h-4 w-4 text-[#e4a8ff] transition-transform duration-500 ${
                    open ? "rotate-45" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 5v14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 12h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <h3 className="text-base font-medium leading-tight text-white sm:text-lg">
                    {item.q}
                  </h3>
                  {item.meta && (
                    <span className="inline-flex w-fit items-center rounded-full border border-white/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-color-ddbbf1/70 sm:ml-auto">
                      {item.meta}
                    </span>
                  )}
                </div>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden text-sm leading-relaxed text-color-ddbbf1 transition-[max-height] duration-500 ease-out ${
                    open ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <p className="pr-2">{item.a}</p>
                </div>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
