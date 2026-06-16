import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/ivva-logo.jpg.asset.json";
import { AWARDS } from "@/lib/awards";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-[color:var(--ivory)]" style={{ minHeight: "60vh" }}>
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[color:var(--gold-bright)] to-transparent" />
      <div className="absolute inset-x-0 top-[3px] h-12 bg-gradient-to-b from-[color:var(--gold)]/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 */}
          <div>
            <img src={logo.url} alt="IVVA" className="h-20 w-auto" />
            <p className="heading-serif mt-6 text-lg italic text-[color:var(--ivory)]/80">
              Where vision meets victory. Celebrating the architects of human excellence across nations.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--gold)]/40 text-[color:var(--gold)] transition-all hover:bg-[color:var(--gold)] hover:text-black"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <p className="eyebrow mb-6">Navigate</p>
            <ul className="space-y-3 text-sm">
              {[
                ["/", "Home"],
                ["/awards", "Awards"],
                ["/nominate", "Nominate"],
                ["/gallery", "Gallery"],
                ["/about", "About"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="transition-colors hover:text-[color:var(--gold-bright)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <p className="eyebrow mb-6">Award Categories</p>
            <ul className="space-y-3 text-sm">
              {AWARDS.map((a) => (
                <li key={a.slug} className="text-[color:var(--ivory)]/75 hover:text-[color:var(--gold-bright)] transition-colors">
                  {a.featured && <span className="mr-1 text-[color:var(--gold-bright)]">★</span>}
                  {a.name.replace("IVVA ", "")}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <p className="eyebrow mb-6">Connect</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 text-[color:var(--gold)]" /> hello@ivva-awards.org</li>
              <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5 text-[color:var(--gold)]" /> +91 98765 43210</li>
              <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-[color:var(--gold)]" /> Mumbai · Dubai · London</li>
            </ul>

            <p className="eyebrow mt-8 mb-3">Newsletter</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex border border-[color:var(--gold)]/40">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-3 py-3 text-xs text-white placeholder:text-white/40 focus:outline-none"
              />
              <button className="bg-[color:var(--gold)] px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-black hover:bg-[color:var(--gold-bright)]">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="gold-divider mt-16" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-[color:var(--ivory)]/50 md:flex-row">
          <p>© 2025 IVVA International. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[color:var(--gold)]">Privacy Policy</a>
            <a href="#" className="hover:text-[color:var(--gold)]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
