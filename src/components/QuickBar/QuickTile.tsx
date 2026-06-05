import { NavLink } from "react-router-dom";

type Props = {
  icon: string;
  iconBg?: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  wider?: boolean;
};

export default function QuickTile({ icon, iconBg = "bg-accent-light", title, description, href, external = false, wider = false }: Props) {
  const className = `flex items-center gap-4 py-5 md:px-6 ${wider ? "md:flex-[1.4]" : "flex-1"} border-b md:border-b-0 md:border-r border-border last:border-0 cursor-pointer hover:bg-orange-50 transition-colors`;

  const inner = (
    <>
      <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center text-2xl shrink-0`}>
        {icon}
      </div>
      <div>
        <div className="font-bold text-sm text-ink">{title}</div>
        <div className="text-xs text-ink-muted mt-0.5">{description}</div>
      </div>
      <span className="ml-auto text-border text-lg">→</span>
    </>
  );

if (external) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{inner}</a>;
}

if (href.startsWith('/#')) {
  return <a href={href} className={className}>{inner}</a>;
}

return <NavLink to={href} className={className}>{inner}</NavLink>;
}