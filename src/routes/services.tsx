import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import walkImg from "@/assets/svc-walk.jpg";
import catImg from "@/assets/svc-cat.jpg";
import dropinImg from "@/assets/svc-dropin.jpg";
import vacationImg from "@/assets/svc-vacation.jpg";
import playImg from "@/assets/svc-play.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Dog Walks & Cat Check-Ins in Katy, TX | Furry Friends Co." },
      { name: "description", content: "Dog walks, cat check-ins, drop-in visits, playtime, and vacation pet care for families in Katy, TX 77494." },
    ],
  }),
});

const items = [
  {
    img: walkImg, title: "Dog Walks", price: "From $20",
    desc: "A friendly neighborhood walk for dogs who need fresh air, movement, and attention.",
    includes: ["20–30 min walk", "Water refill if needed", "Photo update", "Treats only with owner approval"],
  },
  {
    img: catImg, title: "Cat Check-Ins", price: "From $18",
    desc: "Calm, gentle care for cats while their humans are away.",
    includes: ["Food & water refill", "Litter box refresh", "Playtime or quiet company", "Photo update"],
  },
  {
    img: dropinImg, title: "Drop-In Visits", price: "From $25",
    desc: "Perfect for busy workdays, weekend plans, or pets who need a quick visit.",
    includes: ["Feeding & fresh water", "Potty break", "Basic play", "Photo or text update"],
  },
  {
    img: vacationImg, title: "Vacation Pet Care", price: "From $45 / day",
    desc: "Multiple daily visits while your family is traveling.",
    includes: ["2 visits per day", "Pet care checklist", "Daily updates", "Basic home check if requested"],
  },
  {
    img: playImg, title: "Pet Playtime", price: "From $22",
    desc: "Extra love, toys, cuddles, and enrichment for pets who enjoy social time.",
    includes: ["Indoor or backyard play", "Favorite toys encouraged", "Short video update if requested"],
  },
];

const pricing = [
  ["Quick Check-In (15–20 min)", "$18"],
  ["Dog Walk (20–30 min)", "$20"],
  ["Cat Check-In", "$18"],
  ["Standard Drop-In (30 min)", "$25"],
  ["Vacation Care (2 visits/day)", "$45 / day"],
  ["Extra pet", "+$5"],
  ["Travel beyond 10 miles", "+$5–$10"],
  ["Holiday or special schedule", "Varies"],
];

function Services() {
  return (
    <>
      <Section bg="cream" size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-coral">Our services</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
            Services for Dogs, Cats, and Friendly Pets
          </h1>
          <p className="mt-5 text-lg text-charcoal/80 leading-relaxed">
            We offer simple, flexible pet care for families in Katy, TX 77494 and nearby neighborhoods.
            Every visit is designed around your pet's needs, comfort, and routine.
          </p>
        </div>
      </Section>

      <Section bg="white" size="md">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((s) => (
            <article key={s.title} className="bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col">
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                  <span className="text-sm font-bold text-coral whitespace-nowrap">{s.price}</span>
                </div>
                <p className="mt-2 text-charcoal/75 leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {s.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-coral mt-0.5">✓</span>
                      <span className="text-charcoal/80">{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-border">
                  <CTAButton className="w-full">Request a Pet Visit</CTAButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="sage">
        <SectionHeader
          eyebrow="Pricing"
          title="Starter Pricing"
          subtitle="Final pricing may vary based on distance, number of pets, visit length, schedule, and special care needs. We're happy to discuss what works best for your family."
        />
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
          <table className="w-full">
            <tbody>
              {pricing.map(([s, p], i) => (
                <tr key={s} className={i % 2 ? "bg-cream/50" : ""}>
                  <td className="px-6 py-4 text-charcoal/85">{s}</td>
                  <td className="px-6 py-4 text-right font-bold text-deep-green whitespace-nowrap">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-sm italic text-charcoal/70">
          Final pricing will be confirmed before the visit.
        </p>
      </Section>

      <CTABanner title="Need help with your pet this week?" body="Tell us about your pet and we'll be in touch with availability and pricing." />
    </>
  );
}
