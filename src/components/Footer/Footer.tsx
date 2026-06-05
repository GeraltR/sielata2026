import { NavLink } from "react-router-dom";
import logo from "../../assets/sielata_logo_53w.gif";
import type { Festival } from "../../types/Festival";
import { formatDateRange } from "../../utils/date";

type Props = { festival: Festival };

export default function Footer({ festival }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ink-inverse/60">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Kolumna 1 — branding */}
          <div className="md:col-span-1">
            <img src={logo} alt="SieLata" className="h-10 w-auto mb-3" />
            <p className="text-xs font-bold uppercase tracking-widest text-ink-inverse/40 mb-4">
              Lotnictwo · Modelarstwo · Jaworzno
            </p>
            <p className="text-sm leading-relaxed mb-6">
              Nieformalna społeczność pasjonatów lotnictwa z Jaworzna i okolic.
              Organizatorzy Festiwalu Modelarskiego — corocznego święta lotnictwa i modelarstwa na Śląsku.
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://www.facebook.com/Sielata-561882014014619/", label: "f" },
                { href: "https://www.facebook.com/FestiwalModelarski", label: "🏆" },
                { href: "https://pl.pinterest.com/mtelski/", label: "P" },
                { href: "https://www.linkedin.com/in/pawe%C5%82-m%C4%99telski-a89b34aa/", label: "in" },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center
                             text-sm font-bold text-ink-inverse/70
                             hover:bg-accent hover:text-ink-inverse transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Kolumna 2 — nawigacja */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink-inverse mb-4">
              Nawigacja
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><NavLink to="/" className="hover:text-accent transition-colors">Start</NavLink></li>
              <li><NavLink to="/#tematyka" className="hover:text-accent transition-colors">Tematyka roku</NavLink></li>
              <li><NavLink to="/#o-nas" className="hover:text-accent transition-colors">O nas</NavLink></li>
              <li><NavLink to="/#sponsorzy" className="hover:text-accent transition-colors">Sponsorzy</NavLink></li>
              <li><NavLink to="/#wyniki" className="hover:text-accent transition-colors">Wyniki zawodów</NavLink></li>
            </ul>
          </div>

          {/* Kolumna 3 — platformy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink-inverse mb-4">
              Platformy
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="https://festiwal.sielata.com.pl" target="_blank" rel="noreferrer"
                  className="text-accent hover:text-accent-dark transition-colors">
                  🏆 Festiwal — rejestracja
                </a>
              </li>
              <li>
                <a href="https://pogoda.sielata.com.pl" target="_blank" rel="noreferrer"
                  className="text-accent hover:text-accent-dark transition-colors">
                  🌤 Stacja Pogodowa
                </a>
              </li>
              <li><NavLink to="/kontakt" className="hover:text-accent transition-colors">✉ Kontakt</NavLink></li>
              <li><NavLink to="/#polityka" className="hover:text-accent transition-colors">Polityka prywatności</NavLink></li>
            </ul>
          </div>

          {/* Kolumna 4 — festiwal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink-inverse mb-4">
              Festiwal {festival.year}
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>📅 {formatDateRange(festival.festival_start, festival.festival_end)}</li>
              <li>📍 {festival.location ?? festival.city}</li>
              <li>
                <a href="https://festiwal.sielata.com.pl" target="_blank" rel="noreferrer"
                  className="hover:text-accent transition-colors">
                  📝 Rejestracja otwarta
                </a>
              </li>
              <li>🏆 {festival.edition} edycja</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row
                        justify-between items-center gap-2 text-xs">
          <span>© {year} <span className="text-accent">SieLata</span> · Jaworzno. Wszelkie prawa zastrzeżone.</span>
          <span>{festival.edition} Festiwal Modelarski Jaworzno · {formatDateRange(festival.festival_start, festival.festival_end)}</span>
        </div>

      </div>
    </footer>
  );
}

{/* <a href="https://api.sielata.com.pl/public/sielata-panel"
   target="_blank"
   rel="noreferrer"
   className="text-xs text-ink-inverse/20 hover:text-ink-inverse/60 transition-colors">
  Panel
</a> */}