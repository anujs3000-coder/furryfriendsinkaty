import { CTAButton } from "./Layout";

export function CTABanner({
  title = "Ready to request your first pet visit?",
  body = "Tell us about your pet and the care you need. We'll review your request and follow up with next steps.",
}: { title?: string; body?: string }) {
  return (
    <section className="bg-coral">
      <div className="mx-auto max-w-4xl px-5 py-16 md:py-20 text-center">
        <h2 className="!text-white text-3xl md:text-4xl font-semibold leading-tight">{title}</h2>
        <p className="mt-4 text-white/95 text-lg max-w-2xl mx-auto">{body}</p>
        <div className="mt-7">
          <CTAButton variant="onCoral">Request a Pet Visit</CTAButton>
        </div>
      </div>
    </section>
  );
}
