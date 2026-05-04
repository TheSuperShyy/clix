"use client";

import {
  Fragment,
  useRef,
  type ComponentPropsWithoutRef,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { FOOTER_TAGS, FOOTER_CONTACT } from "@/content/footer";

const FOOTER_PILL_LINKS = [
  { label: "שירותים", href: "#services" },
  { label: "למה CLIX", href: "#benefits" },
  { label: "שאלות נפוצות", href: "#faq" },
  { label: "פרטיות", href: "#" },
  { label: "תנאי שימוש", href: "#" },
];

function applyMagnetic(el: HTMLElement, e: ReactMouseEvent<HTMLElement>) {
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  el.style.setProperty("--mx", `${x * 0.35}px`);
  el.style.setProperty("--my", `${y * 0.35}px`);
  el.style.setProperty("--rx", `${-y * 0.12}deg`);
  el.style.setProperty("--ry", `${x * 0.12}deg`);
}

function resetMagnetic(el: HTMLElement) {
  el.style.setProperty("--mx", "0px");
  el.style.setProperty("--my", "0px");
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
}

function MagneticLink({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"a">) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      onMouseMove={(e) => ref.current && applyMagnetic(ref.current, e)}
      onMouseLeave={() => ref.current && resetMagnetic(ref.current)}
      className={cn("footer-pill", className)}
      {...rest}
    >
      {children}
    </a>
  );
}

function MagneticButton({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"button">) {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={ref}
      onMouseMove={(e) => ref.current && applyMagnetic(ref.current, e)}
      onMouseLeave={() => ref.current && resetMagnetic(ref.current)}
      className={cn("footer-pill", className)}
      {...rest}
    >
      {children}
    </button>
  );
}

function FooterTagRow() {
  return (
    <div className="flex shrink-0 items-center gap-12 px-6 whitespace-nowrap">
      {FOOTER_TAGS.map((tag, i) => (
        <Fragment key={`${tag}-${i}`}>
          <span>{tag}</span>
          <span
            aria-hidden
            className={
              i % 2 === 0 ? "text-[#7f00ff]/60" : "text-[#e100ff]/60"
            }
          >
            ✦
          </span>
        </Fragment>
      ))}
    </div>
  );
}

export function Footer() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end end"],
  });

  const giantY = useTransform(scrollYProgress, [0, 1], ["8vh", "0vh"]);
  const giantScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const giantOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.4, 1], [50, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={wrapperRef}
      id="contact"
      className="relative h-screen w-full"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <footer
        className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden text-white"
        style={{ background: "#07030f" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(127,0,255,0.22) 0%, rgba(225,0,255,0.14) 40%, transparent 72%)",
            filter: "blur(40px)",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-[5vh] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap"
          style={{
            y: giantY,
            scale: giantScale,
            opacity: giantOpacity,
            fontSize: "26vw",
            lineHeight: 0.75,
            fontWeight: 900,
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            backgroundImage:
              "linear-gradient(180deg, rgba(228,168,255,0.15) 0%, transparent 60%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          CLIX
        </motion.div>

        <div
          dir="ltr"
          className="relative z-10 mt-16 -rotate-2 scale-110 overflow-hidden border-y border-white/[0.08] bg-black/30 py-4 shadow-2xl"
        >
          <div className="animate-footer-marquee flex w-max text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-color-ddbbf1/70">
            {Array.from({ length: 4 }).map((_, i) => (
              <FooterTagRow key={i} />
            ))}
          </div>
        </div>

        <motion.div
          className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6"
          style={{ opacity: contentOpacity }}
        >
          <motion.h2
            className="mb-10 text-center text-5xl font-black tracking-tighter md:text-7xl"
            style={{
              y: headingY,
              backgroundImage:
                "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.45) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 18px rgba(127,0,255,0.2))",
            }}
          >
            מוכנים לזוז?
          </motion.h2>

          <motion.div
            className="flex w-full flex-col items-center gap-5"
            style={{ y: headingY }}
          >
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <MagneticLink
                href="#contact"
                className="flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold text-white md:text-base"
              >
                קבעו דמו
                <span aria-hidden>←</span>
              </MagneticLink>
              <MagneticLink
                href={`mailto:${FOOTER_CONTACT.email}`}
                className="flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold text-color-ddbbf1 hover:text-white md:text-base"
              >
                {FOOTER_CONTACT.email}
              </MagneticLink>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {FOOTER_PILL_LINKS.map((l) => (
                <MagneticLink
                  key={l.label}
                  href={l.href}
                  className="rounded-full px-5 py-2 text-xs font-medium text-color-ddbbf1 hover:text-white md:text-sm"
                >
                  {l.label}
                </MagneticLink>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="relative z-20 flex w-full flex-col items-center justify-between gap-5 px-6 pb-8 md:flex-row md:px-12">
          <div className="order-2 text-[10px] font-semibold uppercase tracking-widest text-color-ddbbf1/70 md:order-1 md:text-xs">
            © 2026 CLIX. נבנה בישראל.
          </div>

          <div className="footer-pill order-1 flex cursor-default items-center gap-2 rounded-full px-6 py-3 md:order-2">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-color-ddbbf1/70 md:text-xs">
              נבנה על ידי
            </span>
            <span className="ml-1 text-xs font-black tracking-normal text-white md:text-sm">
              8200 + הטכניון
            </span>
          </div>

          <MagneticButton
            type="button"
            onClick={scrollToTop}
            className="group order-3 flex h-12 w-12 items-center justify-center rounded-full text-color-ddbbf1 hover:text-white"
            aria-label="חזרה למעלה"
          >
            <ArrowUp
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1"
              strokeWidth={2}
            />
          </MagneticButton>
        </div>
      </footer>
    </div>
  );
}
