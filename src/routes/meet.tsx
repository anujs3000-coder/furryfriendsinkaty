import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import sistersImg from "@/assets/sisters.jpg";
import catImg from "@/assets/svc-cat.jpg";

export const Route = createFileRoute("/meet")({
  component: Meet,
  head: () => ({
    meta: [
      { title: "Meet Diya & Pari | Furry Friends Co." },
      { name: "description", content: "Two sisters from Katy, TX who love animals and care for pets like family." },
    ],
  }),
});

const promises = [
  { title: "Gentle Care", body: "We take time to understand each pet's personality, routine, and comfort level." },
  { title: "Clear Communication", body: "You can receive photo, video, or text updates after visits." },
  { title: "Reliable Visits", body: "We take scheduling seriously and confirm the details before each visit." },
  { title: "Local Service", body: "We focus on Katy 77494 and nearby neighborhoods so we can serve families responsibly." },
];

function Meet() {
  return (
    <>
      <Section bg="cream" size="lg">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-3 bg-sage/30 rounded-[2rem] -rotate-2" aria-hidden />
            <img src={sistersImg} alt="Diya and Pari outdoors with a happy dog" width={1400} height={1024} className="relative rounded-[2rem] shadow-xl object-cover aspect-[4/3] w-full" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-coral">The team</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">Meet Diya &amp; Pari</h1>
            <p className="mt-5 text-lg text-charcoal/80 leading-relaxed">
              Two sisters from Katy who love animals and care for pets like family.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader title="Our Story" />
          <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed text-left">
            <p>Hi, we're Diya and Pari — sisters, animal lovers, and proud Katy locals.</p>
            <p>
              Furry Friends Co. started because we love spending time with pets and wanted to help
              nearby families who need simple, reliable pet care. What began as helping friends and
              neighbors has now become a small local service built around kindness, trust, and
              happy pets.
            </p>
            <p>
              We know pets are family. Our goal is to make every visit feel calm, caring, and
              dependable — whether your pet needs a walk, a check-in, feeding, playtime, or
              companionship while you're away.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="sage">
        <SectionHeader eyebrow="Our promise" title="What We Promise" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {promises.map((p) => (
            <div key={p.title} className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-coral/15 text-coral flex items-center justify-center font-bold">🐾</div>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-charcoal/75 leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="cream">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Why We Love This</h2>
            <p className="mt-5 text-lg text-charcoal/80 leading-relaxed">
              Pets have a way of making every day better. We love seeing a dog excited for a walk,
              a cat slowly warm up during a visit, or a pet parent feel relieved because they know
              their pet is okay. That's what Furry Friends Co. is all about.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 bg-coral/15 rounded-[2rem] rotate-2" aria-hidden />
            <img src={catImg} alt="A gentle moment with a cat" loading="lazy" width={1024} height={1024} className="relative rounded-[2rem] shadow-lg object-cover aspect-[4/3] w-full" />
          </div>
        </div>
      </Section>

      <CTABanner title="Want to introduce us to your pet?" body="Send us a quick request and we'll follow up with next steps." />
    </>
  );
}
