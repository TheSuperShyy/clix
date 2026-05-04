"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ActiveNavLink } from "@/components/active-nav-link";
import { GlassButton } from "@/components/glass-button";
import { NAV_LINKS, CTA_HREF, LOGIN_HREF } from "@/content/nav";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 12);

        const light = document.querySelector<HTMLElement>(".section-light");
        if (light) {
          const r = light.getBoundingClientRect();
          setTheme(r.top < 80 && r.bottom > 16 ? "light" : "dark");
        }

        const hscroll = document.querySelector<HTMLElement>(".hscroll-section");
        const inHscroll =
          !!hscroll &&
          (() => {
            const r = hscroll.getBoundingClientRect();
            return r.top < 40 && r.bottom > 40;
          })();

        if (inHscroll) {
          setHidden(true);
        } else if (y < 12) {
          setHidden(false);
        } else {
          const goingDown = y > lastY;
          if (Math.abs(y - lastY) > 4) {
            setHidden(goingDown);
          }
        }

        lastY = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-theme={theme}
      data-hidden={hidden}
    >
      <div className="container is-header flex items-center justify-between">
        <a
          href="#"
          aria-label="דף הבית של CLIX"
          className="flex items-center gap-2.5 text-white"
        >
          <span
            aria-hidden
            className="block shrink-0"
            style={{
              height: "2.25rem",
              aspectRatio: "405 / 357",
              backgroundColor: "currentColor",
              WebkitMaskImage: "url('/logos/clix-logo.png')",
              maskImage: "url('/logos/clix-logo.png')",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
          <span className="text-xl font-semibold tracking-tight">CLIX</span>
        </a>

        <nav className="desktop-only flex items-center gap--32">
          {NAV_LINKS.map((link) => (
            <ActiveNavLink key={link.href} href={link.href}>
              {link.label}
            </ActiveNavLink>
          ))}
        </nav>

        <div className="desktop-only flex items-center gap--16">
          <GlassButton href={LOGIN_HREF} variant="header">
            כניסה
          </GlassButton>
          <GlassButton href={CTA_HREF}>קבעו דמו</GlassButton>
        </div>

        <button
          type="button"
          className="desktop-hide inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white"
          aria-label={open ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X strokeWidth={2} /> : <Menu strokeWidth={2} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu desktop-hide">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-auto flex flex-col gap--16">
            <GlassButton href={LOGIN_HREF} variant="header">
              כניסה
            </GlassButton>
            <GlassButton href={CTA_HREF}>קבעו דמו</GlassButton>
          </div>
        </div>
      )}
    </header>
  );
}
