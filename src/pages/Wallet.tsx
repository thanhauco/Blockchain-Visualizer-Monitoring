import Layout from '../components/layout/Layout';
import { useParams } from 'react-router-dom';

const Wallet = () => {
  const { address } = useParams();
  const displayAddress = address || '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

  const stats = [
    { label: 'ETH Balance', value: '42.503 ETH', subValue: '$112,450.21', icon: 'account_balance_wallet' },
    { label: 'Total Value', value: '$842,912', subValue: '+2.4% (24h)', icon: 'payments', trend: true },
    { label: 'Total Transactions', value: '1,402', subValue: '822 In / 580 Out', icon: 'swap_horiz' },
    { label: 'First Activity', value: '2 years ago', subValue: 'Oct-12-2021', icon: 'history' },
  ];

  return (
    <Layout title="Wallet Monitor">
      <div className="flex flex-col gap-6">
        {/* Address Header */}
        <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-[32px]">person</span>
              </div>
              <div className="overflow-hidden">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-xl font-bold truncate text-slate-900 dark:text-white">{displayAddress}</h1>
                  <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-emerald-500/20">Active</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 dark:text-text-secondary text-sm">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">label</span> Whale Address</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">qr_code_2</span> View QR</span>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-[16px]">content_copy</span> Copy</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex-1 md:flex-none px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all">
                Add to Watchlist
              </button>
              <button className="p-2 border border-slate-200 dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-white/5">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </button>
              <button className="p-2 border border-slate-200 dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-white/5">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-5 flex flex-col gap-1">
              <div className="flex justify-between items-start mb-2">
                <span className="text-slate-500 dark:text-text-secondary text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                <span className="material-symbols-outlined text-slate-400 text-[18px]">{stat.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</span>
                <span className={`text-[11px] font-medium ${stat.trend ? 'text-emerald-500' : 'text-slate-500 dark:text-text-secondary'}`}>
                  {stat.subValue}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Portfolio Performance */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6">
               <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Portfolio Performance</h3>
                  <div className="flex gap-1 bg-slate-100 dark:bg-border-dark/50 p-1 rounded-lg">
                    {['1D', '1W', '1M', '1Y', 'ALL'].map(r => (
                      <button key={r} className={`px-3 py-1 text-xs font-bold rounded ${r === '1M' ? 'bg-white dark:bg-surface-dark shadow' : 'text-slate-500'}`}>{r}</button>
                    ))}
                  </div>
               </div>
               <div className="h-64 flex items-center justify-center italic text-slate-400">
                  Transaction Chart Placeholder
               </div>
            </div>
            
            {/* Interaction Visualizer */}
            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Interaction Visualizer</h3>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-border-dark rounded-xl bg-slate-50/50 dark:bg-white/2">
                <div className="flex flex-col items-center gap-2 text-slate-400">
                  <span className="material-symbols-outlined text-4xl">hub</span>
                  <p className="text-sm italic">Chord Diagram Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area: Assets & Counterparties */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Top Assets */}
            <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden">
               <div className="p-4 border-b border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-white/5">
                 <h3 className="font-bold text-sm">Top Assets</h3>
               </div>
               <div className="flex flex-col divide-y divide-slate-100 dark:divide-border-dark">
                  {[
                    { name: 'Ethereum', symbol: 'ETH', price: '$2,450', value: '$112,450', percent: '42%' },
                    { name: 'Tether', symbol: 'USDT', price: '$1.00', value: '$85,200', percent: '28%' },
                    { name: 'Wrapped BTC', symbol: 'WBTC', price: '$42,300', value: '$45,120', percent: '15%' },
                  ].map(asset => (
                    <div key={asset.symbol} className="p-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                      <div className="flex justify-between mb-1">
                        <span className="font-bold text-sm">{asset.name}</span>
                        <span className="text-sm font-bold">{asset.value}</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-500 dark:text-text-secondary">
                        <span>{asset.percent} of portfolio</span>
                        <span>{asset.symbol} / {asset.price}</span>
                      </div>
                    </div>
                  ))}
               </div>
               <div className="p-3 text-center border-t border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-white/5">
                  <button className="text-xs font-bold text-primary hover:underline">View All Assets</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wallet;
