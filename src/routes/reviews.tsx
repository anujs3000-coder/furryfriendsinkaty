import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { CTAButton } from "@/components/Layout";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/reviews")({
  component: Reviews,
  head: () => ({
    meta: [
      { title: "Pet Care Reviews | Furry Friends Co." },
      { name: "description", content: "Kind words from Katy families who have trusted Pari & Diya with their pets." },
    ],
  }),
});

const reviews = [
  { quote: "Pari and Diya were wonderful with our dog. We loved getting updates and knew he was in good hands.", name: "[First Name]", pet: "[Pet Name]" },
  { quote: "They were reliable, caring, and easy to communicate with. Our cat was happy and relaxed when we got home.", name: "[First Name]", pet: "[Pet Name]" },
  { quote: "The photo updates made a big difference while we were away. We would definitely ask them again.", name: "[First Name]", pet: "[Pet Name]" },
];

function Reviews() {
  return (
    <>
      <Section bg="cream" size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-coral">Reviews</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">Happy Pets, Happy Families</h1>
          <p className="mt-5 text-lg text-charcoal/80 leading-relaxed">
            Kind words from families who have trusted Pari &amp; Diya with their pets.
          </p>
        </div>
      </Section>

      <Section bg="white">
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article key={i} className="bg-cream rounded-3xl p-7 shadow-sm flex flex-col">
              <div className="text-coral text-3xl font-display leading-none">"</div>
              <p className="mt-2 italic text-charcoal/85 leading-relaxed flex-1">{r.quote}</p>
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-sage flex items-center justify-center text-deep-green font-bold">🐾</div>
                <div className="text-sm">
                  <div className="font-semibold text-deep-green">{r.name}</div>
                  <div className="text-charcoal/65">pet parent to {r.pet}</div>
                </div>
              </div>
              <p className="mt-3 text-xs italic text-charcoal/50">(Review placeholder)</p>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="sage">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader title="Have We Helped Care for Your Pet?" />
          <p className="-mt-6 text-lg text-charcoal/80 leading-relaxed">
            If Pari and Diya have cared for your pet before, we would love to include your kind
            words on our website.
          </p>
          <p className="mt-3 text-sm italic text-charcoal/65">
            Pet photos will only be used with owner permission.
          </p>
          <div className="mt-7">
            <CTAButton>Request a Pet Visit</CTAButton>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
