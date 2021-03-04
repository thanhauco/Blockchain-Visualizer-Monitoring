import Layout from '../components/layout/Layout';

const Blocks = () => {
  const networkStats = [
    { label: 'Block Height', value: '#18,293,001', trend: '+1 (2s ago)', icon: 'tag', color: 'text-glow' },
    { label: 'TPS', value: '4,200', trend: '12% Increase', icon: 'speed' },
    { label: 'Avg Gas', value: '12 Gwei', trend: 'Low Congestion', icon: 'local_gas_station' },
    { label: 'Last Finalized', value: '18,292,980', trend: 'Epoch 219034', icon: 'verified' },
  ];

  const blocks = [
    { height: '#18293001', time: '2s ago', miner: '0x3f...8a91', txs: '142 Txns', reward: '2.4 ETH', active: true },
    { height: '#18293000', time: '14s ago', miner: '0x8a...2b44', txs: '98 Txns', reward: '1.8 ETH' },
    { height: '#18292999', time: '26s ago', miner: '0x1c...9d11', txs: '215 Txns', reward: '3.1 ETH' },
    { height: '#18292998', time: '38s ago', miner: '0x9b...3e22', txs: '156 Txns', reward: '2.1 ETH' },
    { height: '#18292997', time: '50s ago', miner: '0x4f...5a66', txs: '89 Txns', reward: '1.6 ETH' },
  ];

  return (
    <Layout title="Block Explorer">
      <div className="flex flex-col gap-8">
        {/* Network Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {networkStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 rounded-xl p-5 border border-slate-200 dark:border-border-dark bg-white dark:bg-[#161b26] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-5xl">layers</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary text-lg">{stat.icon}</span>
                <p className="text-slate-500 dark:text-text-secondary text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
              <p className={`text-slate-900 dark:text-white text-2xl font-bold font-mono tracking-tight ${stat.color || ''}`}>{stat.value}</p>
              <div className="flex items-center gap-1 text-emerald-500 dark:text-green-400 text-xs font-medium mt-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span>{stat.trend}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Latest Blocks Ribbon */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-slate-900 dark:text-white font-bold text-lg">Latest Blocks</h3>
            <a className="text-primary text-sm hover:underline flex items-center gap-1" href="#">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="w-full overflow-x-auto hide-scrollbar pb-2">
            <div className="flex gap-4 min-w-max">
              {blocks.map((block) => (
                <div 
                  key={block.height} 
                  className={`flex flex-col p-4 border rounded-lg min-w-[220px] cursor-pointer transition-all ${
                    block.active 
                      ? 'bg-primary/10 border-primary' 
                      : 'bg-white dark:bg-[#161b26] border-slate-200 dark:border-border-dark hover:border-slate-400 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-sm font-mono font-bold ${block.active ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{block.height}</span>
                    <span className="text-xs text-slate-500 dark:text-text-secondary">{block.time}</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-text-secondary mb-1">
                    Mined by <span className="text-slate-900 dark:text-white font-mono">{block.miner}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded ${block.active ? 'bg-primary/20 text-primary' : 'bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300'}`}>
                      {block.txs}
                    </span>
                    <span className="text-xs text-slate-900 dark:text-white">{block.reward}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inspection Area: Two Columns */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Block Details */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-[#161b26] overflow-hidden">
              <div className="p-5 border-b border-slate-200 dark:border-border-dark flex justify-between items-center bg-slate-50 dark:bg-[#1c212c]">
                <h3 className="text-slate-900 dark:text-white font-bold text-lg">Block Details</h3>
                <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">Finalized</span>
              </div>
              <div className="p-5 flex flex-col gap-6">
                {/* Key Info */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-text-secondary text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">tag</span> Block Height
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-900 dark:text-white font-mono font-bold text-lg">18,293,001</span>
                      <button className="text-slate-500 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                      </button>
                    </div>
                  </div>
                  <div className="h-px bg-slate-200 dark:bg-border-dark w-full"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-text-secondary text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">schedule</span> Timestamp
                    </span>
                    <span className="text-slate-900 dark:text-white text-sm text-right">Oct-24-2023 04:12:23 PM</span>
                  </div>
                  {/* ... more info could be added here */}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            {/* Transactions table placeholder */}
            <div className="h-96 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-[#161b26] flex items-center justify-center italic text-slate-400">
               Transactions Table Placeholder
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blocks;
