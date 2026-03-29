"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/motion";

const links = [
  { label: "Email", value: "smaranvoora@gmail.com", href: "mailto:smaranvoora@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/sv20004", href: "https://www.linkedin.com/in/sv20004/" },
  { label: "GitHub", value: "github.com/SmarabSJJ", href: "https://github.com/SmarabSJJ" },
];

export default function Contact() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      {/* Section header */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="relative mb-12">
        <span
          aria-hidden
          className="absolute -top-6 left-0 font-[family-name:var(--font-headline)] font-black text-[8rem] leading-none text-[#161B22] select-none pointer-events-none"
        >
          05
        </span>
        <p className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E] mb-3 relative z-10">
          Contact
        </p>
        <h1 className="font-[family-name:var(--font-headline)] font-bold text-5xl md:text-6xl text-[#E6EDF3] relative z-10">
          Let&apos;s talk.
        </h1>
      </motion.div>

      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-[#8B949E] mb-12 max-w-md leading-relaxed"
      >
        Open to new opportunities, interesting problems, and collaborations.
        If you&apos;ve got a hard problem, an interesting idea, or a photo of a highland cow — my inbox is open.
      </motion.p>

      {/* Contact blocks */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="space-y-3 mb-8"
      >
        {links.map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="flex items-center justify-between border border-[#30363D] bg-[#161B22] rounded px-6 py-5 hover:border-[#5B8FFF] transition-all duration-200 group hover:-translate-y-0.5"
          >
            <span className="font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E] group-hover:text-[#8B949E] w-24">
              {label}
            </span>
            <span className="font-[family-name:var(--font-headline)] font-semibold text-base text-[#E6EDF3] flex-1 mx-4">
              {value}
            </span>
            <span className="font-[family-name:var(--font-label)] text-[#5B8FFF] text-lg">
              →
            </span>
          </a>
        ))}
      </motion.div>

      <motion.p
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-[family-name:var(--font-label)] text-xs text-[#8B949E]"
      >
        Usually responds within 24 hours.
      </motion.p>

      {/* Footer */}
      <div className="mt-24 pt-6 border-t border-[#30363D]">
        <p className="font-[family-name:var(--font-label)] text-xs text-[#8B949E]">
          Smaran Voora · 2025 · Built with Next.js
        </p>
      </div>
    </main>
  );
}
