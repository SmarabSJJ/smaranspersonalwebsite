"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/motion";

const skills = [
  "C#", "Python", "JavaScript", "TypeScript", "React.js", "Next.js",
  "Tailwind CSS", "SQL", "AWS", "Docker", "C++", "Splunk", "Jira",
];

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto">
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-sm tracking-widest uppercase text-[#C17A3A] mb-6"
      >
        About
      </motion.p>

      <div className="max-w-2xl">
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-serif text-5xl md:text-6xl leading-tight mb-10"
        >
          Smaran Voora
        </motion.h1>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="space-y-5 text-[#444] leading-relaxed text-base"
        >
          <p>
            CS grad from UT Dallas, now a software engineer at Visa in Austin.
            I build full-stack systems — recently spent two years automating warehouse ops
            and a summer at Schwab shipping a tool that 10x&apos;d transaction throughput.
          </p>
          <p>
            Outside of work: pickleball, basketball, baking, and traveled to 15 countries so far.
            Send me photos of your pets 🙏
          </p>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-12"
        >
          <p className="text-xs tracking-widest uppercase text-[#999] mb-4">Tools & Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-[#ddd] px-3 py-1 text-xs text-[#555] hover:border-[#C17A3A] hover:text-[#C17A3A] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
