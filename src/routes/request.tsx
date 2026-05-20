import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/Layout";

const FORM_URL = "https://forms.gle/your-form-link";

export const Route = createFileRoute("/request")({
  component: Request,
  head: () => ({
    meta: [
      { title: "Request a Pet Visit | Furry Friends Co." },
      { name: "description", content: "Fill out our short form and we'll follow up to confirm availability, pricing, and next steps." },
    ],
  }),
});

function Request() {
  return (
    <>
      <Section bg="cream" size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-coral">Get started</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
            Let's Set Up Your Pet's First Visit
          </h1>
          <p className="mt-5 text-lg text-charcoal/80 leading-relaxed">
            Fill out the short form and we'll follow up to confirm availability, pricing, and next steps.
          </p>
          <div className="mt-7">
            <CTAButton href={FORM_URL}>Open the Request Form</CTAButton>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <div className="max-w-3xl mx-auto bg-cream rounded-3xl p-8 md:p-12 shadow-sm text-center">
          <div className="text-5xl mb-4">📝</div>
          <h2 className="text-2xl md:text-3xl font-semibold">Embed your Google Form here</h2>
          <p className="mt-3 text-charcoal/75 leading-relaxed">
            Replace this block with an embedded Google Form (or update <code className="px-1.5 py-0.5 bg-white rounded text-sm">FORM_URL</code> in this page).
            Until then, the button above opens the request form in a new tab.
          </p>
          <div className="mt-6">
            <CTAButton href={FORM_URL}>Open the Request Form</CTAButton>
          </div>
        </div>
      </Section>

      <Section bg="sage" size="sm">
        <div className="max-w-2xl mx-auto text-center">
          <p className="italic text-charcoal/80">Having trouble viewing the form? Use the button below.</p>
          <div className="mt-5">
            <CTAButton href={FORM_URL}>Open the Request Form</CTAButton>
          </div>
          <p className="mt-6 text-charcoal/80">
            Questions? Email us at{" "}
            <a className="font-semibold text-deep-green underline decoration-coral underline-offset-4" href="mailto:furryfriendsinkaty@gmail.com">
              furryfriendsinkaty@gmail.com
            </a>
          </p>
          <p className="mt-4 text-xs italic text-charcoal/65">
            Submitting the form does not guarantee availability. We will review the request and respond as soon as possible.
          </p>
        </div>
      </Section>
    </>
  );
}
