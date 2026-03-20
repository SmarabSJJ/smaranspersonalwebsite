"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpHero as fadeUp } from "@/components/motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-32 pb-24 max-w-5xl mx-auto">
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-sm tracking-widest uppercase text-[#C17A3A] mb-6 font-mono"
      >
        Austin, TX
      </motion.p>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-8"
      >
        Smaran
        <br />
        Voora
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-lg md:text-xl text-[#444] max-w-xl mb-12 leading-relaxed font-mono"
      >
        Full stack solutions expert building solutions to problems you don&apos;t have yet.
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
          className="inline-block border border-[#111] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#111] hover:text-[#F8F6F1] transition-colors duration-200"
        >
          View Work
        </Link>
        <Link
          href="/contact"
          className="inline-block border border-[#C17A3A] text-[#C17A3A] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#C17A3A] hover:text-white transition-colors duration-200"
        >
          Get in Touch
        </Link>
      </motion.div>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-24 pt-8 border-t border-[#ddd] flex gap-8 text-xs tracking-widest uppercase text-[#999]"
      >
        <a href="https://www.linkedin.com/in/sv20004/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition-colors">LinkedIn</a>
        <a href="https://github.com/SmarabSJJ" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition-colors">GitHub</a>
        <a href="mailto:smaranvoora@gmail.com" className="hover:text-[#111] transition-colors">Email</a>
      </motion.div>
    </main>
  );
}
