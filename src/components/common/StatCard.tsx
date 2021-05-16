import type { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  trend?: {
    value: string;
    isUp: boolean;
  };
  iconColor?: string;
  iconBg?: string;
}

const StatCard = ({ label, value, icon, trend, iconColor = "text-emerald-500", iconBg = "bg-emerald-500/10" }: StatCardProps) => {
  return (
    <div className="p-5 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{label}</p>
          <h3 className="text-2xl font-bold font-display tracking-tight text-slate-900 dark:text-white">{value}</h3>
        </div>
        <span className={`p-2 rounded-lg ${iconBg} ${iconColor}`}>
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </span>
      </div>
      {trend && (
        <div className="flex items-center gap-2 text-xs font-medium">
          <span className={`${trend.isUp ? 'text-emerald-500' : 'text-orange-500'} flex items-center`}>
            <span className="material-symbols-outlined text-[14px]">
              {trend.isUp ? 'arrow_upward' : 'arrow_downward'}
            </span>
            {trend.value}
          </span>
          <span className="text-slate-400">vs last 24h</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
