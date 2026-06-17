import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Check, ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";
import heroStage from "@/assets/hero-stage.jpg";
import heroGala from "@/assets/hero-gala.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — IVVA International" },
      { name: "description", content: "Get in touch with the IVVA International team — press inquiries, partnerships, nominations." },
      { property: "og:title", content: "Connect With IVVA" },
      { property: "og:description", content: "Reach the IVVA International team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const slides = [
    { image: heroStage, eyebrow: "Get In Touch", title: "Connect With Us", subtitle: "Our council is available for press, partnerships, and inquiries." },
    { image: heroGala, eyebrow: "We're Listening", title: "Speak To The Council" },
  ];

  const [sent, setSent] = useState(false);

  return (
    <>
      <HeroCarousel slides={slides} />

      {/* CONTACT */}
      <section className="bg-[color:var(--background)] py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-5">Send Us a Message</p>
            <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">
              We'd love to <span className="text-gold-gradient italic heading-serif">hear from you</span>
            </h2>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="mt-10 border border-[color:var(--gold)]/40 bg-[color:var(--surface)] p-8 md:p-10 space-y-5"
            >
              {sent ? (
                <div className="py-10 text-center">
                  <Check className="mx-auto text-[color:var(--gold-bright)]" size={44} />
                  <p className="heading-display mt-5 text-2xl text-gold-gradient">Message Sent</p>
                  <p className="mt-3 text-[color:var(--ivory)]/70">We'll be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Subject" name="subject" required />
                  <div>
                    <label className="eyebrow mb-2 block">Message <span className="text-[color:var(--gold-bright)] ml-1">*</span></label>
                    <textarea
                      rows={6}
                      required
                      className="w-full border border-[color:var(--gold)]/40 bg-[color:var(--background)] px-4 py-3 text-[color:var(--ivory)] focus:border-[color:var(--gold-bright)] focus:outline-none"
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full">
                    Send Message <ArrowRight size={16} />
                  </button>
                </>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="eyebrow mb-5">Reach Us Directly</p>
            <div className="space-y-6">
              {[
                { Icon: Mail, label: "Email", value: "hello@ivva-awards.org" },
                { Icon: Phone, label: "Telephone", value: "+91 98765 43210" },
                { Icon: MapPin, label: "Headquarters", value: "Mumbai · Dubai · London" },
              ].map((c) => (
                <div key={c.label} className="border border-[color:var(--gold)]/30 bg-[color:var(--surface)] p-6">
                  <c.Icon className="text-[color:var(--gold-bright)]" size={22} />
                  <p className="eyebrow mt-3">{c.label}</p>
                  <p className="mt-1 text-[color:var(--ink)]">{c.value}</p>
                </div>
              ))}
            </div>

            <p className="eyebrow mt-10 mb-4">Social</p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-12 w-12 place-items-center border border-[color:var(--gold)]/40 text-[color:var(--gold)] transition-all hover:bg-[color:var(--gold)] hover:text-black">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* MAP PLACEHOLDER */}
      <section className="bg-[color:var(--cream)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden border border-[color:var(--gold)]/30">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, rgba(201,168,76,0.15) 0 2px, transparent 2px 30px), repeating-linear-gradient(-45deg, rgba(155,44,59,0.10) 0 2px, transparent 2px 30px), #fbf6ea",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <MapPin className="mx-auto text-[color:var(--gold-bright)]" size={48} />
                  <p className="heading-display mt-4 text-3xl text-[color:var(--ink)]">IVVA Global HQ</p>
                  <p className="eyebrow mt-2">Mumbai · India</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* PRESS CTA */}
      <section className="bg-[color:var(--surface)] py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden border-4 border-[color:var(--burgundy)] bg-[color:var(--cream)] p-12 text-center md:p-20 gold-pulse">
              <p className="eyebrow mb-5">For the Press</p>
              <h2 className="heading-display text-4xl md:text-5xl text-[color:var(--ink)]">
                Media & <span className="text-gold-gradient italic heading-serif">Press Inquiries</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[color:var(--ivory)]/75">
                Journalists, broadcasters, and writers covering the IVVA International Awards may reach our press office directly. Embargoed previews and high-resolution assets are available on request.
              </p>
              <a href="mailto:press@ivva-awards.org" className="btn-gold mt-8">
                press@ivva-awards.org
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow mb-2 block">{label}{required && <span className="text-[color:var(--gold-bright)] ml-1">*</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-[color:var(--gold)]/40 bg-[color:var(--background)] px-4 py-3 text-[color:var(--ivory)] focus:border-[color:var(--gold-bright)] focus:outline-none"
      />
    </div>
  );
}
