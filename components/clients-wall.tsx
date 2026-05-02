"use client";

import { Marquee } from "@/components/ui/marquee";
import { CLIENTS, type Client } from "@/content/clients";

function LogoCard({ client }: { client: Client }) {
  return (
    <div
      className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-5"
      style={{ contain: "layout paint" }}
    >
      {client.logoSrc ? (
        <img
          src={client.logoSrc}
          alt={client.name}
          className="max-h-12 max-w-[8rem] h-auto w-auto object-contain opacity-90"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="text-base font-semibold uppercase tracking-[0.18em] text-white/85">
          {client.name}
        </span>
      )}
    </div>
  );
}

const COLUMN_DUR = ["58s", "68s", "62s"] as const;

export function ClientsWall() {
  return (
    <div className="absolute inset-0 flex items-center justify-end overflow-hidden [perspective:360px]">
      <div
        className="flex flex-row items-center gap-3"
        style={{
          transform:
            "translateX(40px) translateZ(-60px) rotateX(10deg) rotateY(-8deg) rotateZ(8deg)",
          willChange: "transform",
        }}
      >
        {COLUMN_DUR.map((dur, i) => (
          <Marquee
            key={i}
            vertical
            reverse={i % 2 === 1}
            repeat={2}
            style={{ ["--duration" as string]: dur }}
          >
            {CLIENTS.map((c) => (
              <LogoCard key={c.name} client={c} />
            ))}
          </Marquee>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #07030f 0%, rgba(7,3,15,0.95) 32%, rgba(7,3,15,0.55) 52%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07030f] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07030f] to-transparent" />
    </div>
  );
}
