interface LineChartProps {
  title: string;
  subtitleValue: string;
  subtitleTrend: string;
  timeRanges: string[];
  activeRange: string;
  dataPaths: string; // SVG path d attribute
  labels: string[];
}

const LineChart = ({ title, subtitleValue, subtitleTrend, timeRanges, activeRange, dataPaths, labels }: LineChartProps) => {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{subtitleValue}</span>
            <span className="text-xs font-bold text-emerald-500 px-2 py-0.5 rounded bg-emerald-500/10">{subtitleTrend}</span>
          </div>
        </div>
        <div className="flex gap-1 bg-slate-100 dark:bg-border-dark rounded-lg p-1">
          {timeRanges.map((range) => (
            <button 
              key={range}
              className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                range === activeRange 
                  ? 'bg-white dark:bg-background-dark shadow-sm text-slate-900 dark:text-white' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      
      {/* Chart Area */}
      <div className="relative h-[240px] w-full">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#135bec" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#135bec" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${dataPaths} V300 H0 Z`} fill="url(#chartGradient)" />
          <path d={dataPaths} fill="none" stroke="#135bec" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
          <div className="border-t border-slate-500 w-full h-0"></div>
          <div className="border-t border-slate-500 w-full h-0"></div>
          <div className="border-t border-slate-500 w-full h-0"></div>
          <div className="border-t border-slate-500 w-full h-0"></div>
          <div className="border-t border-slate-500 w-full h-0"></div>
        </div>
      </div>
      
      <div className="flex justify-between text-xs font-mono text-slate-400 mt-4">
        {labels.map((label) => <span key={label}>{label}</span>)}
      </div>
    </div>
  );
};

export default LineChart;
