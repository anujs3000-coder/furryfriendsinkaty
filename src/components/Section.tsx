import type { ReactNode } from "react";

type Bg = "cream" | "white" | "sage" | "coral" | "green";

const bgMap: Record<Bg, string> = {
  cream: "bg-cream",
  white: "bg-white",
  sage: "bg-sage-light",
  coral: "bg-coral text-white",
  green: "bg-deep-green text-cream",
};

export function Section({
  bg = "cream",
  size = "md",
  children,
  className = "",
  id,
}: {
  bg?: Bg;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const padding = { sm: "py-12", md: "py-16 md:py-20", lg: "py-20 md:py-28" }[size];
  return (
    <section id={id} className={`${bgMap[bg]} ${padding} ${className}`}>
      <div className="mx-auto max-w-7xl px-5">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls} mb-10 md:mb-14`}>
      {eyebrow && (
        <p className={`text-xs font-bold tracking-[0.18em] uppercase mb-3 ${invert ? "text-coral" : "text-coral"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-5xl font-semibold leading-tight ${invert ? "!text-white" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${invert ? "text-white/90" : "text-charcoal/80"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
