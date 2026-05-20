import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import heroImg from "@/assets/hero-home.jpg";
import sistersImg from "@/assets/sisters.jpg";
import walkImg from "@/assets/svc-walk.jpg";
import catImg from "@/assets/svc-cat.jpg";
import dropinImg from "@/assets/svc-dropin.jpg";
import vacationImg from "@/assets/svc-vacation.jpg";
import playImg from "@/assets/svc-play.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Furry Friends Co. | Pet Care in Katy, TX" }],
  }),
});

const services = [
  { img: walkImg, title: "Dog Walks", desc: "Fresh air, exercise, and tail wags for friendly dogs." },
  { img: catImg, title: "Cat Check-Ins", desc: "Food, water, litter, playtime, and calm company." },
  { img: dropinImg, title: "Drop-In Visits", desc: "Feeding, potty break, fresh water, and a photo update." },
  { img: vacationImg, title: "Vacation Pet Care", desc: "Multiple daily visits while your family is away." },
];

const trust = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7"><path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
    ),
    title: "Local to Katy",
    body: "We serve Katy 77494 and nearby neighborhoods, with flexible availability based on distance and schedule.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7"><rect x="3" y="6" width="18" height="13" rx="2"/><circle cx="12" cy="12.5" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg>
    ),
    title: "Photo & Video Updates",
    body: "Get a quick photo, short video, or text update so you know your pet is doing well.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>
    ),
    title: "Safety Comes First",
    body: "We don't accept reptiles or aggressive pets, and we recommend a meet-and-greet before the first visit.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto max-w-7xl px-5 pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-coral bg-coral/10 px-3 py-1.5 rounded-full">
              🐾 Katy, TX 77494
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-[1.05] text-deep-green">
              Loving Pet Care for Busy Katy Families
            </h1>
            <p className="mt-5 text-lg md:text-xl text-charcoal/80 leading-relaxed">
              Dog walks, cat check-ins, drop-in visits, playtime, and vacation pet care from{" "}
              <span className="font-semibold text-deep-green">Pari &amp; Diya</span> — two local
              sisters who treat every pet like family.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton>Request a Pet Visit</CTAButton>
              <CTAButton variant="outline" to="/services">View Services</CTAButton>
            </div>
            <p className="mt-5 text-sm text-charcoal/70">
              Serving Katy, TX 77494 and nearby neighborhoods · Most requests answered within 24 hours
            </p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-deep-green/80">
              <span>Dogs &amp; Cats</span><span>·</span>
              <span>Photo/Video Updates</span><span>·</span>
              <span>No Reptiles</span><span>·</span>
              <span>No Aggressive Pets</span>
            </div>
          </div>
          <div className="rounded-[2rem] bg-sage/20 p-3 shadow-xl">
            <img
              src={heroImg}
              alt="Pari and Diya with pets"
              width={3200}
              height={2000}
              className="block w-full aspect-[8/5] rounded-[1.5rem] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <Section bg="white">
        <SectionHeader
          eyebrow="What we do"
          title="Pet Care That Fits Real Life"
          subtitle="Whether you're at work, traveling, or just need an extra hand, Furry Friends Co. keeps your pets cared for, comfortable, and loved."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton variant="outline" to="/services">View All Services</CTAButton>
        </div>
      </Section>

      {/* Trust */}
      <Section bg="sage">
        <SectionHeader
          eyebrow="Why families trust us"
          title="Simple, Friendly, and Reliable"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {trust.map((t) => (
            <div key={t.title} className="bg-white rounded-3xl p-7 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-coral/15 text-coral flex items-center justify-center">
                {t.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-charcoal/75 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Meet preview */}
      <Section bg="cream">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-[2rem] bg-coral/10 p-3 shadow-lg">
            <img
              src={sistersImg}
              alt="Pari and Diya with pets"
              loading="lazy"
              width={3200}
              height={2000}
              className="block w-full aspect-[8/5] rounded-[1.5rem] object-cover object-center"
            />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-coral">The sisters</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Meet Pari &amp; Diya</h2>
            <p className="mt-4 text-lg text-charcoal/80 leading-relaxed">
              We're two sisters from Katy who love animals and wanted to create a simple,
              reliable pet care service for nearby families. Whether your pet needs a walk,
              a check-in, or a little extra attention, we bring patience, kindness, and care
              to every visit.
            </p>
            <div className="mt-6">
              <Link to="/meet" className="inline-flex items-center gap-2 text-deep-green font-semibold border-b-2 border-coral pb-0.5 hover:gap-3 transition-all">
                Meet Pari &amp; Diya →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Photo updates */}
      <Section bg="white">
        <SectionHeader
          eyebrow="Visit updates"
          title="See How Your Pet Is Doing"
          subtitle="A simple update can make a big difference. After each visit, we can send a quick photo, short video, or text update."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { img: playImg, caption: "Bella had a great walk and drank water afterward." },
            { img: catImg, caption: "Milo ate his food, used the litter box, and enjoyed playtime." },
            { img: dropinImg, caption: "Charlie was happy and relaxed during the visit." },
          ].map((u, i) => (
            <div key={i} className="bg-cream rounded-3xl p-4 shadow-sm">
              <img src={u.img} alt="Pet update" loading="lazy" width={1024} height={1024} className="rounded-2xl aspect-square w-full object-cover" />
              <p className="mt-4 px-2 pb-2 italic text-charcoal/80">"{u.caption}"</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
