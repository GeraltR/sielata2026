import Modal from '../components/Common/Modal';
import { useRules } from '../hooks/useRules';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function RulesModal({ isOpen, onClose }: Props) {
  const { rules, loading } = useRules();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={rules?.title ?? 'Regulamin Festiwalu'}
      printable
    >
      {loading ? (
        <div className="flex items-center justify-center py-16 text-ink-muted text-sm">
          Ładowanie…
        </div>
      ) : !rules ? (
        <p className="py-16 text-center text-ink-muted text-sm">
          Nie udało się załadować regulaminu.
        </p>
      ) : (
        <div
          className="prose prose-lg max-w-none
                     prose-headings:font-heading prose-headings:text-ink
                     prose-h2:text-xl prose-h3:text-lg
                     prose-strong:text-ink
                     prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                     prose-li:text-ink-muted prose-p:text-ink-muted
                     prose-ol:text-ink-muted prose-ul:text-ink-muted"
          dangerouslySetInnerHTML={{ __html: rules.content }}
        />
      )}
    </Modal>
  );
}