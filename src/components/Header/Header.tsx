import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/sielata_logo_53.gif";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-accent font-bold text-sm"
      : "text-link hover:text-accent transition-colors font-bold text-sm";

  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0" onClick={close}>
          <img src={logo} alt="SieLata" className="h-10 w-auto" />
        </a>

        {/* Nawigacja desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className={linkClass("/")}>Start</a>
          <a href="https://festiwal.sielata.com.pl" target="_blank" rel="noreferrer" className={linkClass("/festiwal")}>Festiwal</a>
          <a href="https://pogoda.sielata.com.pl" target="_blank" rel="noreferrer" className={linkClass("/pogoda")}>Pogoda</a>
          <a href="/#kontakt" className={linkClass("/kontakt")}>Kontakt</a>
        </nav>

        {/* Przyciski desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://pogoda.sielata.com.pl" target="_blank" rel="noreferrer"
            className="text-sm font-bold text-link border border-border
                       px-4 py-2 rounded-lg hover:border-accent hover:text-accent
                       transition-colors">
            🌤 Pogoda
          </a>
          <a href="https://festiwal.sielata.com.pl" target="_blank" rel="noreferrer"
            className="text-sm font-bold text-ink-inverse bg-navy
                       px-4 py-2 rounded-lg hover:bg-navy-dark transition-colors">
            🏆 Festiwal
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden bg-accent-light w-10 h-10 rounded-lg 
             flex items-center justify-center transition-colors"
          style={{ backgroundColor: isOpen ? "#FF8000" : "" }}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324 325" className="w-7 h-7" fill="none">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M323 0 L1 92 L213 111 L236 323 Z"
              fill={isOpen ? "white" : "#FF8000"} />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M276 34 L219 93 L104 82 L272 33 Z"
              fill={isOpen ? "#FF8000" : "white"} />
          </svg>
        </button>
      </div>

      {/* Szuflada mobile */}
      {isOpen && (
        <nav className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-4">
          <a href="/" className={linkClass("/")} onClick={close}>Start</a>
          <a href="https://festiwal.sielata.com.pl" target="_blank" rel="noreferrer" className={linkClass("/festiwal")} onClick={close}>Festiwal</a>
          <a href="https://pogoda.sielata.com.pl" target="_blank" rel="noreferrer" className={linkClass("/pogoda")} onClick={close}>Pogoda</a>
          <a href="/#kontakt" className={linkClass("/kontakt")} onClick={close}>Kontakt</a>
          <div className="flex gap-3 pt-2 border-t border-border">
            <a href="https://pogoda.sielata.com.pl" target="_blank" rel="noreferrer" onClick={close}
              className="flex-1 text-center text-sm font-bold text-link border border-border
                         px-4 py-2 rounded-lg hover:border-accent hover:text-accent transition-colors">
              🌤 Pogoda
            </a>
            <a href="https://festiwal.sielata.com.pl" target="_blank" rel="noreferrer" onClick={close}
              className="flex-1 text-center text-sm font-bold text-ink-inverse bg-navy
                         px-4 py-2 rounded-lg hover:bg-navy-dark transition-colors">
              🏆 Festiwal
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}