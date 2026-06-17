import { motion } from "framer-motion";
import { Award as AwardIcon } from "lucide-react";
import type { Award } from "@/lib/awards";
import { Link } from "@tanstack/react-router";

export default function AwardCard({ award, index = 0 }: { award: Award; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className={`group relative flex h-full flex-col border bg-[color:var(--surface)] p-8 transition-all duration-500 ${
        award.featured
          ? "border-[color:var(--gold-bright)] gold-pulse"
          : "border-[color:var(--gold)]/25 hover:border-[color:var(--gold)] hover:shadow-[0_20px_60px_-20px_rgba(201,168,76,0.5)]"
      }`}
    >
      {award.featured && (
        <span className="absolute -top-3 left-6 bg-[color:var(--gold-bright)] px-3 py-1 text-[10px] font-bold tracking-[0.25em] text-black">
          ★ FEATURED
        </span>
      )}
      <div className="mb-6 grid h-14 w-14 place-items-center border border-[color:var(--gold)]/40">
        <AwardIcon size={26} className="text-[color:var(--gold-bright)]" />
      </div>
      <p className="eyebrow mb-3">{award.category}</p>
      <h3 className="heading-display text-2xl text-[color:var(--ink)]">{award.name.replace("IVVA ", "")}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[color:var(--ivory)]/70 line-clamp-4">
        {award.description}
      </p>
      <Link
        to="/nominate"
        className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[color:var(--gold)] transition-colors hover:text-[color:var(--gold-bright)]"
      >
        Nominate
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </motion.div>
  );
}
