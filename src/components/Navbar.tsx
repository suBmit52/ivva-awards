import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ivva-logo.jpg.asset.json";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/awards", label: "Awards" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--surface)]  border-b border-[color:var(--gold)]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logo.url}
            alt="IVVA Awards"
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-[11px] font-medium uppercase tracking-[0.25em] text-[color:var(--ivory)] transition-colors hover:text-[color:var(--gold-bright)]"
              activeProps={{ className: "text-[color:var(--gold-bright)]" }}
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[color:var(--gold)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/nominate" className="btn-gold !py-2.5 !px-6 !text-[11px]">
            Nominate
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[color:var(--gold)]"
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--gold)]/20 bg-[color:var(--surface)] ">
          <div className="flex flex-col px-6 py-6">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-[color:var(--gold)]/10 py-4 text-sm uppercase tracking-[0.25em] text-[color:var(--ivory)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/nominate"
              onClick={() => setOpen(false)}
              className="btn-gold mt-6"
            >
              Nominate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
