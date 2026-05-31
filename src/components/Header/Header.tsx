import { NavLink } from "react-router-dom";
import logo from "../../assets/sielata_logo_53.gif";

// Funkcja zamiast stałego stringa — NavLink przekazuje { isActive }
const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-accent font-bold"
    : "text-link hover:text-accent transition-colors font-bold text-sm";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="SieLata" className="h-10 w-auto" />
        </NavLink>

        {/* Nawigacja desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" end className={navLinkClass}>Start</NavLink>
          <NavLink to="/festiwal" className={navLinkClass}>Festiwal</NavLink>
          <NavLink to="/pogoda" className={navLinkClass}>Pogoda</NavLink>
          <NavLink to="/kontakt" className={navLinkClass}>Kontakt</NavLink>
        </nav>

        {/* Przycisk pogoda + festiwal (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/pogoda"
            className="text-sm font-bold text-link border border-border
                       px-4 py-2 rounded-lg hover:border-accent hover:text-accent
                       transition-colors"
          >
            🌤 Pogoda
          </NavLink>
          <NavLink
            to="/festiwal"
            className="text-sm font-bold text-ink-inverse bg-navy
                       px-4 py-2 rounded-lg hover:bg-navy-dark hover:text-accent transition-colors"
          >
            🏆 Festiwal
          </NavLink>
        </div>

        {/* Hamburger mobile — TODO: podpiąć stan */}
        <button className="md:hidden text-xl text-text">☰</button>
      </div>
    </header>
  );
}