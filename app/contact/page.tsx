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
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-sm tracking-widest uppercase text-[#C17A3A] mb-6"
      >
        Contact
      </motion.p>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-serif text-5xl md:text-6xl leading-tight mb-8 max-w-xl"
      >
        Let&apos;s talk.
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-[#555] mb-16 max-w-md leading-relaxed"
      >
        I&apos;m not actively looking, but recruiters are always welcome to reach out.
        If you&apos;ve got a hard problem, an interesting idea, or a photo of a highland cow — my inbox is open.
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="divide-y divide-[#e8e4dc]"
      >
        {links.map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="flex items-center justify-between py-6 group"
          >
            <span className="text-xs tracking-widest uppercase text-[#999]">{label}</span>
            <span className="text-sm text-[#111] group-hover:text-[#C17A3A] transition-colors">
              {value} →
            </span>
          </a>
        ))}
      </motion.div>
    </main>
  );
}
