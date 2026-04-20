import { GlassButton } from "@/components/glass-button";
import {
  FOOTER_COLUMNS,
  FOOTER_TAGS,
  FOOTER_CONTACT,
} from "@/content/footer";

export function Footer() {
  return (
    <footer id="contact" className="pt-24 pb-10 lg:pt-32 border-t border-white/5">
      <div className="container flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="text-2xl font-semibold tracking-tight text-white">
              CLIX
            </div>
            <p className="text-color-ddbbf1 text-size-16-16-14 text-weight-300">
              Hyper-Automation for operators. Engineers from Unit 8200 and the
              Technion — we ship systems, not slide decks.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${FOOTER_CONTACT.email}`}
                className="text-white text-size-16-16-14 font-medium hover:text-[#e4a8ff] transition-colors"
              >
                {FOOTER_CONTACT.email}
              </a>
              <GlassButton href="#contact">Book a Demo</GlassButton>
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <div className="text-sm uppercase tracking-wide text-[#c89bff]">
                {col.title}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-color-ddbbf1 text-size-16-16-14 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {FOOTER_TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-4 py-2 text-xs text-[#e4c2ff]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-t border-white/5 pt-8">
          <div className="text-color-ddbbf1 text-sm">
            © 2026 CLIX. Built in Israel.
          </div>
          <div className="flex items-center gap-6 text-sm text-color-ddbbf1">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
