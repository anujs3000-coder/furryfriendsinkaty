import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import dropinImg from "@/assets/svc-dropin.jpg";

export const Route = createFileRoute("/safety")({
  component: Safety,
  head: () => ({
    meta: [
      { title: "Safety & Care Promise | Furry Friends Co." },
      { name: "description", content: "How we keep pets safe: thoughtful questions, meet-and-greets, and clear boundaries on which pets we accept." },
    ],
  }),
});

const accept = [
  "Friendly dogs",
  "Cats",
  "Other friendly pets we're comfortable caring for",
  "Drop-ins, walks, feeding, water, litter refreshes, playtime, and vacation visits",
];

const decline = [
  "No reptiles",
  "No aggressive pets",
  "No pets with biting history (unless fully discussed and accepted)",
  "No dogs with serious leash-pulling concerns (unless discussed first)",
  "No medical care beyond simple instructions (unless agreed in advance)",
];

function Safety() {
  return (
    <>
      <Section bg="cream" size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-coral">Safety & care</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
            Your Pet's Safety Comes First
          </h1>
          <p className="mt-5 text-lg text-charcoal/80 leading-relaxed">
            Every pet is different. Before accepting a visit, we ask thoughtful questions so we can
            care for your pet safely and responsibly.
          </p>
        </div>
      </Section>

      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader title="Our Care Promise" />
          <p className="-mt-6 text-lg text-charcoal/80 leading-relaxed">
            We care for pets with patience, kindness, and common sense. Before confirming a booking,
            we review your pet's temperament, size, leash behavior, special care needs, and comfort
            with new people. If a visit doesn't feel safe for the pet or for us, we'll be honest and
            decline the booking.
          </p>
        </div>
      </Section>

      <Section bg="sage">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-7 shadow-sm">
            <h3 className="text-2xl font-semibold">What We Accept</h3>
            <ul className="mt-4 space-y-2.5">
              {accept.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-deep-green/10 text-deep-green flex items-center justify-center text-sm font-bold flex-shrink-0">✓</span>
                  <span className="text-charcoal/85">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-7 shadow-sm">
            <h3 className="text-2xl font-semibold">What We Don't Accept</h3>
            <ul className="mt-4 space-y-2.5">
              {decline.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-coral/15 text-coral flex items-center justify-center text-sm font-bold flex-shrink-0">×</span>
                  <span className="text-charcoal/85">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="cream">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-sage/30 rounded-[2rem] -rotate-2" aria-hidden />
            <img src={dropinImg} alt="A friendly first meeting between sitter and dog" loading="lazy" width={1024} height={1024} className="relative rounded-[2rem] shadow-lg object-cover aspect-[4/3] w-full" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Meet-and-Greet Recommended</h2>
            <p className="mt-4 text-lg text-charcoal/80 leading-relaxed">
              For new families, we recommend a quick meet-and-greet before the first visit. This
              helps us learn your pet's routine, personality, and care instructions while making
              sure everyone feels comfortable.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader title="Emergency Information" />
          <p className="-mt-6 text-lg text-charcoal/80 leading-relaxed">
            For vacation care or multiple visits, we may request an emergency contact and vet
            information so we know what to do if something unexpected happens.
          </p>
        </div>
      </Section>

      <CTABanner title="Ready to tell us about your pet?" />
    </>
  );
}
