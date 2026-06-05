import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/sielata_logo_53.gif";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-accent font-bold"
    : "text-link hover:text-accent transition-colors font-bold text-sm";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
 
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 shrink-0"
          onClick={close}
        >
          <img src={logo} alt="SieLata" className="h-10 w-auto" />
        </NavLink>

        {/* Nawigacja desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" end className={navLinkClass}>
            Start
          </NavLink>
          <NavLink to="/festiwal" className={navLinkClass}>
            Festiwal
          </NavLink>
          <NavLink to="/pogoda" className={navLinkClass}>
            Pogoda
          </NavLink>
          <NavLink to="/#kontakt" className={navLinkClass}>
            Kontakt
          </NavLink>
        </nav>

        {/* Przyciski desktop */}
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
                       px-4 py-2 rounded-lg hover:bg-navy-dark transition-colors"
          >
            🏆 Festiwal
          </NavLink>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden bg-accent-light w-10 h-10 rounded-lg 
             flex items-center justify-center transition-colors"
          style={{ backgroundColor: isOpen ? "#FF8000" : "" }}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 324 325"
            className="w-7 h-7"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M323 0 L1 92 L213 111 L236 323 Z"
              fill={isOpen ? "white" : "#FF8000"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M276 34 L219 93 L104 82 L272 33 Z"
              fill={isOpen ? "#FF8000" : "white"}
            />
          </svg>
        </button>
      </div>

      {/* Szuflada mobile */}
      {isOpen && (
        <nav className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-4">
          <NavLink to="/" end className={navLinkClass} onClick={close}>
            Start
          </NavLink>
          <NavLink to="/festiwal" className={navLinkClass} onClick={close}>
            Festiwal
          </NavLink>
          <NavLink to="/pogoda" className={navLinkClass} onClick={close}>
            Pogoda
          </NavLink>
          <NavLink to="/#kontakt" className={navLinkClass} onClick={close}>
            Kontakt
          </NavLink>
          <div className="flex gap-3 pt-2 border-t border-border">
            <NavLink
              to="/pogoda"
              onClick={close}
              className="flex-1 text-center text-sm font-bold text-link border border-border
                         px-4 py-2 rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              🌤 Pogoda
            </NavLink>
            <NavLink
              to="/festiwal"
              onClick={close}
              className="flex-1 text-center text-sm font-bold text-ink-inverse bg-navy
                         px-4 py-2 rounded-lg hover:bg-navy-dark transition-colors"
            >
              🏆 Festiwal
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
