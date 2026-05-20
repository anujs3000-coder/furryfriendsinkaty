import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

const FORM_URL = "https://forms.gle/2tX2QvnewiUiJLBh9";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/meet", label: "Meet Pari & Diya" },
  { to: "/reviews", label: "Reviews" },
  { to: "/safety", label: "Safety & Care" },
  { to: "/request", label: "Request a Visit" },
] as const;

export function CTAButton({
  children = "Request a Pet Visit",
  variant = "primary",
  href,
  to,
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "onCoral";
  href?: string;
  to?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm";
  const styles = {
    primary: "bg-coral text-white hover:shadow-md",
    outline:
      "border-2 border-deep-green text-deep-green bg-transparent hover:bg-deep-green hover:text-white",
    onCoral: "bg-deep-green text-white hover:bg-white hover:text-deep-green",
  }[variant];
  const cls = `${base} ${styles} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return (
    <a href={href ?? FORM_URL} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Furry Friends Co. logo" width={40} height={40} className="h-10 w-10" />
          <span className="font-display text-xl font-semibold text-deep-green">
            Furry Friends Co.
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.slice(0, 5).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                pathname === n.to
                  ? "text-deep-green bg-sage-light"
                  : "text-charcoal hover:text-deep-green hover:bg-sage-light/60"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CTAButton>Request a Pet Visit</CTAButton>
        </div>
        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-md text-deep-green"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? <><path d="M6 6l12 12" /><path d="M6 18L18 6" /></> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-cream">
          <div className="px-5 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 rounded-lg font-semibold ${
                  pathname === n.to ? "bg-sage-light text-deep-green" : "text-charcoal"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-2">
              <CTAButton className="w-full">Request a Pet Visit</CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 bg-deep-green text-cream">
      <div className="mx-auto max-w-7xl px-5 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" width={36} height={36} className="h-9 w-9" />
            <span className="font-display text-xl">Furry Friends Co.</span>
          </div>
          <p className="mt-3 text-cream/80 text-sm leading-relaxed">
            Loving, local pet care in Katy, TX 77494 and nearby neighborhoods.
            Made with love by Pari &amp; Diya. 🐾
          </p>
        </div>
        <div className="text-sm">
          <h4 className="text-cream font-semibold mb-3 font-body">Visit Us</h4>
          <p className="text-cream/80">Katy, TX 77494</p>
          <p className="text-cream/80 mt-1">
            <a className="hover:text-coral" href="mailto:furryfriendsinkaty@gmail.com">
              furryfriendsinkaty@gmail.com
            </a>
          </p>
          <p className="text-cream/80 mt-1">Most requests answered within 24 hours</p>
        </div>
        <div className="text-sm">
          <h4 className="text-cream font-semibold mb-3 font-body">Pages</h4>
          <ul className="grid grid-cols-2 gap-y-1.5 text-cream/80">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-coral">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-cream/60">
          © 2026 Furry Friends Co. Serving Katy 77494 and nearby neighborhoods.
        </p>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
