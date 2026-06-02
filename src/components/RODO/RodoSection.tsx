import { useState } from 'react';
import { ITEMS_RODO } from '../../config/site';



export default function RodoSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <section className="py-14 bg-surface" id="polityka">
      <div className="max-w-3xl mx-auto px-6">

        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Informacje prawne
        </span>
        <h2 className="font-heading text-3xl font-bold text-ink mt-2 mb-8">
          Polityka prywatności i RODO
        </h2>

        <div className="border border-border rounded-2xl overflow-hidden">
          {ITEMS_RODO.map((item, i) => (
            <div key={item.id} className={i > 0 ? "border-t border-border" : ""}>
              <button
                className="w-full flex items-center justify-between gap-4
                           px-6 py-5 text-left text-sm font-bold text-ink
                           hover:bg-accent-light transition-colors"
                onClick={() => toggle(item.id)}
              >
                {item.title}
                <span className={`text-accent shrink-0 transition-transform duration-200
                                  ${openId === item.id ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>

              {openId === item.id && (
                <div className="px-6 pb-5 text-sm text-ink-muted leading-relaxed bg-accent-light">
                  {item.body}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}