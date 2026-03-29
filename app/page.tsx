"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpHero as fadeUp } from "@/components/motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-28 pb-24 max-w-5xl mx-auto relative overflow-hidden">
      {/* Decorative background number */}
      <span
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-headline)] font-black text-[20vw] leading-none text-[#161B22] select-none pointer-events-none"
      >
        01
      </span>

      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2 mb-8"
      >
        <span className="inline-flex items-center gap-1.5 border border-[#30363D] bg-[#161B22] px-3 py-1 rounded-full font-[family-name:var(--font-label)] text-xs text-[#8B949E]">
          📍 Austin, TX
        </span>
      </motion.div>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-[family-name:var(--font-headline)] font-bold text-[clamp(4rem,12vw,9rem)] leading-[0.9] tracking-tight mb-8"
      >
        <span className="block text-[#E6EDF3]">Smaran</span>
        <span className="block text-[#E6EDF3] relative w-fit">
          Voora
          <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#5B8FFF] rounded-full" />
        </span>
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-base md:text-lg text-[#8B949E] max-w-xl mb-12 leading-relaxed"
      >
        Full stack solutions engineer building solutions to problems you don&apos;t have yet.
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 border border-[#5B8FFF] text-[#5B8FFF] px-7 py-3 text-xs font-[family-name:var(--font-label)] tracking-widest uppercase hover:bg-[#5B8FFF] hover:text-[#0D1117] transition-all duration-200 rounded"
        >
          View Work →
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-[#30363D] text-[#8B949E] px-7 py-3 text-xs font-[family-name:var(--font-label)] tracking-widest uppercase hover:border-[#E6EDF3] hover:text-[#E6EDF3] transition-all duration-200 rounded"
        >
          Get in Touch
        </Link>
      </motion.div>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-20 pt-8 border-t border-[#30363D] flex gap-8 font-[family-name:var(--font-label)] text-xs tracking-widest uppercase text-[#8B949E]"
      >
        <a href="https://www.linkedin.com/in/sv20004/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5B8FFF] transition-colors">LinkedIn ↗</a>
        <a href="https://github.com/SmarabSJJ" target="_blank" rel="noopener noreferrer" className="hover:text-[#5B8FFF] transition-colors">GitHub ↗</a>
        <a href="mailto:smaranvoora@gmail.com" className="hover:text-[#5B8FFF] transition-colors">Email ↗</a>
      </motion.div>
    </main>
  );
}
