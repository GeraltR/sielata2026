import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Festiwal",
    description: "Informacje o wydarzeniu",
    href: "/festiwal",
  },
  {
    title: "Pogoda",
    description: "Stacja pogodowa",
    href: "/pogoda",
  },
  {
    title: "Rejestracja",
    description: "Zgłoszenia uczestników",
    href: "/rejestracja",
  },
  {
    title: "Wyniki",
    description: "Rezultaty zawodów",
    href: "/wyniki",
  },
];

export default function QuickBar() {
  return (
    <section className="bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="
                rounded-xl
                bg-white
                p-6
                shadow
                transition
                hover:-translate-y-1
              "
            >
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {item.description}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}