import type { ComponentType } from "react";

type BadgeCardProps = {
  icon: ComponentType<{ className?: string }>;
  keyword: string;
  text: string;
  description: string;
};

export function BadgeCard({
  icon: Icon,
  keyword,
  text,
  description,
}: BadgeCardProps) {
  return (
    <li className="flex items-start group">
      <div className="p-3 bg-white/5 rounded-xl mr-4 group-hover:bg-purple/10 transition-colors border border-white/5">
        <Icon className="w-6 h-6 text-purple" />
      </div>
      <div>
        <p className="text-lg font-bold leading-snug">
          <span className="font-bold text-purple">{keyword}</span> {text}
        </p>
        <p className="text-sm font-medium text-white/40">{description}</p>
      </div>
    </li>
  );
}
