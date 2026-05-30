import type { Sponsor } from "../../types/Sponsor";

type SponsorsProps = {
  sponsors: Sponsor[];
};

export default function Sponsors({ sponsors }: SponsorsProps) {
  return (
    <section>
      <h2>Sponsorzy</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.url ?? "#"}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={sponsor.logo ?? ""}
              alt={sponsor.name}
              className="max-h-20 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
