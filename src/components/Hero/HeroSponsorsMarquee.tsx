import type { Sponsor } from "../../types/Sponsor";

type HeroSponsorsMarqueeProps = {
  sponsors: Sponsor[];
};

export default function HeroSponsorsMarquee({
  sponsors,
}: HeroSponsorsMarqueeProps) {
  const marqueeSponsors = [...sponsors, ...sponsors];
  return (
    <section className="bg-white py-4 overflow-hidden">
      <div className="marquee-track">
        {marqueeSponsors.map((sponsor, index) =>
          sponsor.logo ? (
            <a href={sponsor.url ?? "#"} target="_blank" rel="noreferrer">
              <img
                key={`${sponsor.id}-${index}`}
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 w-auto object-contain shrink-0"
              />
            </a>
          ) : null,
        )}
      </div>
    </section>
  );
}
