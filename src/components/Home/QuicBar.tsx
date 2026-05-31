import { NavLink } from "react-router-dom";
import type { Festival } from "../../types/Festival";

type Props = { festival: Festival };

export default function QuickBar({ festival }: Props) {
  const now = new Date();
  const afterFestival = now > new Date(festival.festival_end);

  const dynamicItem = afterFestival
  ? {
      icon: "🏅",
      title: "Wyniki",
      description: "Rezultaty zawodów",
      href: "https://festiwal.sielata.com.pl/results",
    }
  : {
      icon: "📝",
      title: "Rejestracja",
      description: "Zgłoszenia uczestników",
      href: "https://festiwal.sielata.com.pl/register",
    };

  const staticItems = [
    { icon: "🏆", title: "Festiwal", description: "Informacje o wydarzeniu", href: "/festiwal", internal: true },
    { icon: "🌤", title: "Pogoda", description: "Stacja pogodowa na żywo", href: "/pogoda", internal: true },
    { icon: "✉️", title: "Kontakt", description: "Napisz do organizatorów", href: "/kontakt", internal: true },
  ];

  return (
    <section className="bg-accent-light py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <a href={dynamicItem.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 bg-navy text-ink-inverse rounded-xl p-5 border border-navy hover:bg-navy-dark transition-colors hover:-translate-y-0.5"
          >
            <span className="text-2xl">{dynamicItem.icon}</span>
            <div>
              <h3 className="font-bold">{dynamicItem.title}</h3>
              <p className="mt-1 text-sm text-ink-inverse/70">{dynamicItem.description}</p>
            </div>
          </a>
          {staticItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="flex items-start gap-4 bg-surface rounded-xl p-5 border border-border hover:border-accent transition-colors hover:-translate-y-0.5"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
              </div>
            </NavLink>
          ))}

        </div>
      </div>
    </section>
  );
}