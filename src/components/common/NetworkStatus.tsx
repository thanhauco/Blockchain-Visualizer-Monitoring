const NetworkStatus = () => {
  const metrics = [
    { label: 'Active Nodes', value: '8,432', icon: 'public', color: 'bg-primary/20 text-primary' },
    { label: 'Propagation', value: '1.2s', subValue: 'avg', icon: 'speed', color: 'bg-orange-500/20 text-orange-500' },
    { label: 'Pending Tx', value: '14,203', icon: 'schedule', color: 'bg-purple-500/20 text-purple-500' },
  ];

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">Network Status</h3>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </div>
      
      <div 
        className="flex-1 rounded-xl border border-slate-200 dark:border-border-dark bg-[#1c1f27] relative overflow-hidden flex flex-col p-4 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_fMbEHFQGT_cxSQDPreAzju4HK69E9KD3wWEvqKAODJeiHK30Hz1ocnH2PENwDSZGozCLFTwWusb-yhIro6q_clXUl9hECa0UIsBJpFy3__q5LG8xS6FMM9kKd2cKwFiOfwsUilW8yvldHYMDPoxf7aNabfEPbovNehMkj8PgPtqvN2Hu-C8LbSqxSDVPSDobN6n_QWRazFL7avkT69DdyccQgrkDGyGeWe0uqCeZMgHO4kHovz6trO4HQItCNrfHLQXXltKcxNE')" }}
      >
        <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-[1px]"></div>
        <div className="relative z-10 flex flex-col gap-3 h-full justify-center">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-center gap-3 p-3 rounded-lg bg-background-dark/60 border border-white/5 backdrop-blur-md">
              <div className={`p-2 rounded ${metric.color}`}>
                <span className="material-symbols-outlined text-[20px]">{metric.icon}</span>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase">{metric.label}</p>
                <p className="text-lg font-bold text-white">
                  {metric.value} {metric.subValue && <span className="text-xs font-normal text-slate-400">{metric.subValue}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkStatus;
