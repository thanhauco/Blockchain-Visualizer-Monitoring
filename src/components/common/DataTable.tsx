import type { ReactNode } from 'react';

interface Column {
  header: string;
  className?: string;
}

interface DataTableProps {
  columns: Column[];
  children: ReactNode;
  className?: string;
  title?: string;
  titleIcon?: ReactNode;
  action?: ReactNode;
}

const DataTable = ({ columns, children, className = "", title, titleIcon, action }: DataTableProps) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            {titleIcon}
            {title}
          </h3>
          {action}
        </div>
      )}
      <div className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-border-dark/30 text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold">
              <tr>
                {columns.map((col, idx) => (
                  <th key={idx} className={`px-4 py-3 ${col.className || ""}`}>
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-border-dark">
              {children}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
