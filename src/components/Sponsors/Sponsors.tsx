import type { Sponsor } from "../../types/Sponsor";

type SponsorsProps = {
    sponsors: Sponsor[];
};

export default function Sponsors({ sponsors }: SponsorsProps) {
    return (
        <section>
            <h2>Sponsorzy</h2>

            <div>
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
                            height={80}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}