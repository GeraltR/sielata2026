import logo from "../../assets/sielata_ico.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-text text-text-inverse/60">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-start
                        justify-between gap-8">

          {/* Branding */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="SieLata" className="w-8 h-8" />
              <span className="font-heading text-xl text-accent">SieLata</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed">
              Społeczność pasjonatów lotnictwa z Jaworzna.
              Organizatorzy Festiwalu Modelarskiego.
            </p>
          </div>

          {/* Linki */}
          <nav className="flex flex-col gap-2 text-sm">
            <span className="text-text-inverse font-bold text-xs
                             uppercase tracking-widest mb-1">
              Nawigacja
            </span>
            <NavLink to="/" className="hover:text-accent transition-colors">Start</NavLink>
            <NavLink to="/festiwal" className="hover:text-accent transition-colors">Festiwal</NavLink>
            <NavLink to="/pogoda" className="hover:text-accent transition-colors">Pogoda</NavLink>
            <NavLink to="/kontakt" className="hover:text-accent transition-colors">Kontakt</NavLink>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10
                        text-xs text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-accent">SieLata</span> · Jaworzno
        </div>
      </div>
    </footer>
  );
}