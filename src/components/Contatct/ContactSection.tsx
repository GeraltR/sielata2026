import { useState, useEffect } from "react";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_PUBLIC_SITE_KEY as string;

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (key: string, opts: { action: string }) => Promise<string>;
    };
  }
}

type Status = null | "sending" | "ok" | "error";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>(null);
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const token = await new Promise<string>((resolve) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(SITE_KEY, { action: "contact" })
            .then(resolve);
        });
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...form, recaptcha_token: token }),
      });

      if (!res.ok) throw new Error();
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setVisible(true);
      setTimeout(() => setOpacity(1), 50);
      setTimeout(() => setOpacity(0), 4000);
      setTimeout(() => {
        setVisible(false);
        setStatus(null);
      }, 5000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 bg-background" id="kontakt">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Kontakt
        </span>
        <h2 className="font-heading text-3xl font-bold text-ink mt-2 mb-2">
          Napisz do nas
        </h2>
        <p className="text-ink-muted mb-10">
          Wypełnij formularz i wyślij go. Odpowiemy jak tylko będzie to możliwe.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formularz */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-ink">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jan Kowalski"
                  value={form.name}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-border bg-surface text-sm
                             text-ink outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-ink">
                  Telefon (opcjonalnie)
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+48 000 000 000"
                  value={form.phone}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-xl border border-border bg-surface text-sm
                             text-ink outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-ink">Adres e-mail</label>
              <input
                type="email"
                name="email"
                required
                placeholder="jan@example.com"
                value={form.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-border bg-surface text-sm
                           text-ink outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-ink">Temat</label>
              <input
                type="text"
                name="subject"
                placeholder="W czym możemy pomóc?"
                value={form.subject}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-border bg-surface text-sm
                           text-ink outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-ink">Wiadomość</label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Treść wiadomości..."
                value={form.message}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-border bg-surface text-sm
                           text-ink outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-accent text-ink-inverse font-bold text-sm px-8 py-4 rounded-xl
                         hover:bg-accent-dark transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "⏳ Wysyłanie…" : "Wyślij wiadomość →"}
            </button>
          </form>
          {visible && (
            <div
              style={{ opacity, transition: "opacity 1s ease" }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Komunikat */}
              <div className="relative z-10 bg-surface rounded-2xl px-10 py-8 max-w-md mx-4 text-center shadow-2xl">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="font-heading text-xl font-bold text-ink mb-2">
                  Wiadomość wysłana!
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Twój list został wysłany, odpowiemy tak szybko jak będzie to
                  możliwe.
                </p>
              </div>
            </div>
          )}
          {/* Prawa kolumna */}
          <div className="flex flex-col gap-6">
            {/* Festiwal link */}
            <a
              href="https://festiwal.sielata.com.pl"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-4 bg-navy text-ink-inverse
                         rounded-2xl p-6 hover:bg-navy-dark transition-colors"
            >
              <div>
                <div className="font-bold">🏆 Festiwal Modelarski</div>
                <div className="text-sm text-ink-inverse/70 mt-1">
                  Rejestracja uczestników i zawodników
                </div>
              </div>
              <span className="text-2xl">→</span>
            </a>

            {/* Social media */}
            <div className="bg-surface rounded-2xl border border-border p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-ink mb-4">
                lub przez media społecznościowe
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    href: "https://www.facebook.com/profile.php?id=100064479110941",
                    label: "Facebook · SieLata",
                  },
                  {
                    href: "https://www.facebook.com/FestiwalModelarski",
                    label: "Facebook · Festiwal Modelarski",
                  },
                  {
                    href: "https://pl.pinterest.com/Sielata/",
                    label: "Pinterest",
                  },
                  {
                    href: "https://www.facebook.com/profile.php?id=100024973350962",
                    label: "Facebook · Organizator",
                  },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm font-bold text-ink
                               px-4 py-3 rounded-xl border border-border
                               hover:border-accent hover:text-accent transition-colors"
                  >
                    {s.label} →
                  </a>
                ))}
              </div>
            </div>
          </div>
          ;
        </div>
      </div>
    </section>
  );
}
