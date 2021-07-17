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
                  <div className="h-px bg-slate-200 dark:bg-border-dark w-full"></div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-text-secondary flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">person</span> Proposer
                    </span>
                    <a className="text-primary hover:underline font-mono" href="#">0x3f5ce5...8a91</a>
                  </div>
                  <div className="h-px bg-slate-200 dark:bg-border-dark w-full"></div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-text-secondary flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">database</span> Size
                    </span>
                    <span className="text-slate-900 dark:text-white">142,034 bytes</span>
                  </div>
                  <div className="h-px bg-slate-200 dark:bg-border-dark w-full"></div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-text-secondary flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">local_gas_station</span> Gas Used
                    </span>
                    <div className="text-right">
                      <p className="text-slate-900 dark:text-white font-medium">14,930,122</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">(49.77%)</p>
                    </div>
                  </div>
                  <div className="h-px bg-slate-200 dark:bg-border-dark w-full"></div>
                  <div className="flex flex-col gap-2">
                    <span className="text-slate-500 dark:text-text-secondary text-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">description</span> Extra Data
                    </span>
                    <div className="bg-slate-50 dark:bg-[#1c212c] rounded p-3 text-xs font-mono text-slate-600 dark:text-slate-400 break-all leading-relaxed">
                      clique/1.2.0-stable-2736e4b5/linux-amd64/go1.21.3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-[#161b26] overflow-hidden">
              <div className="p-5 border-b border-slate-200 dark:border-border-dark flex justify-between items-center bg-slate-50 dark:bg-[#1c212c]">
                <div className="flex items-center gap-3">
                  <h3 className="text-slate-900 dark:text-white font-bold text-lg">Transactions</h3>
                  <span className="bg-slate-200 dark:bg-gray-700 text-slate-600 dark:text-gray-300 text-xs px-2 py-0.5 rounded font-bold">142</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <span className="material-symbols-outlined text-sm">search</span>
                    </span>
                    <input type="text" placeholder="Filter tx..." className="bg-white dark:bg-[#111318] border border-slate-200 dark:border-border-dark rounded-lg py-1 pl-9 pr-3 text-xs focus:outline-none focus:ring-1 focus:ring-primary w-40" />
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead>
                    <tr className="bg-slate-50/50 dark:bg-white/5 text-slate-500 dark:text-text-secondary text-[11px] uppercase tracking-wider font-bold border-b border-slate-200 dark:border-border-dark">
                      <th className="px-6 py-3">Tx Hash</th>
                      <th className="px-6 py-3">Method</th>
                      <th className="px-6 py-3">From / To</th>
                      <th className="px-6 py-3 text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-border-dark/50">
                    {[
                      { hash: '0x7d2b...3a12', method: 'Transfer', from: '0x44...90a', to: '0x88...12b', value: '12.5 ETH' },
                      { hash: '0x3b9a...99c1', method: 'Swap', from: '0x21...bbc', to: 'Uniswap V3', value: '0.45 ETH' },
                      { hash: '0x9a71...22d4', method: 'Approve', from: '0x11...abc', to: 'Tether USD', value: '0 ETH' },
                      { hash: '0x1c44...55a2', method: 'Deposit', from: '0x55...33a', to: 'Aave V3', value: '5.2 ETH' },
                      { hash: '0x8f11...11b0', method: 'Transfer', from: '0x99...22a', to: '0x12...99c', value: '0.05 ETH' },
                    ].map((tx, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-white/2 transition-colors cursor-pointer group">
                        <td className="px-6 py-4">
                          <span className="text-primary font-mono text-xs">{tx.hash}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-gray-800 text-[10px] font-bold text-slate-600 dark:text-gray-400 border border-slate-200 dark:border-gray-700">
                            {tx.method}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1 text-[11px] font-mono">
                            <span className="text-slate-500 dark:text-text-secondary"><span className="opacity-60">F:</span> {tx.from}</span>
                            <span className="text-slate-900 dark:text-white"><span className="opacity-60 text-slate-500 dark:text-text-secondary">T:</span> {tx.to}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-slate-900 dark:text-white font-bold">{tx.value}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-[#1c212c]/50 flex justify-center">
                <button className="text-primary text-xs font-bold hover:underline py-1">View All 142 Transactions</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blocks;

