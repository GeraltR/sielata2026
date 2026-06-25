import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  printable?: boolean;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, printable = false, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handler);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto print:static print:block print:bg-transparent print:backdrop-blur-none print:p-0 print:overflow-visible"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-surface rounded-2xl shadow-2xl print:max-w-none print:my-0 print:shadow-none print:rounded-none"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4 print:hidden">
          {title && (
            <h2 className="font-heading text-2xl font-bold text-ink">{title}</h2>
          )}
          <div className="flex items-center gap-3 ml-auto">
            {printable && (
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9V2h12v7"/><rect x="6" y="17" width="12" height="5" rx="1"/>
                  <path d="M6 13H4a2 2 0 0 0-2 2v4h4M18 13h2a2 2 0 0 1 2 2v4h-4"/>
                </svg>
                Drukuj
              </button>
            )}
            <button onClick={onClose} className="text-ink-muted hover:text-ink transition-colors" aria-label="Zamknij">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-10 print:px-0 print:pb-0">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}