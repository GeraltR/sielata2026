import { NavLink } from "react-router-dom";
import logo from "../../assets/sielata_logo_53.gif";

const navLinkClass =
  "text-slate-300 hover:text-amber-400 transition-colors";

export default function Header() {
  return (
    <header className="bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="SieLata"
            className="h-8 w-8"
          />

          <span className="font-semibold text-lg">
            SieLata
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Start
          </NavLink>

          <NavLink to="/festiwal" className={navLinkClass}>
            Festiwal
          </NavLink>

          <NavLink to="/pogoda" className={navLinkClass}>
            Pogoda
          </NavLink>

          <NavLink to="/kontakt" className={navLinkClass}>
            Kontakt
          </NavLink>
        </nav>

        <button className="md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}