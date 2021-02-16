import Layout from '../components/layout/Layout';

const Network = () => {
  const stats = [
    { label: 'Active Nodes', value: '4,832', sub: '+12 (1h)', icon: 'hub' },
    { label: 'Avg Latency', value: '142ms', sub: 'Low', icon: 'speed' },
    { label: 'Bandwidth', value: '840 GB/s', sub: 'Peak', icon: 'swap_calls' },
  ];

  const nodes = [
    { id: 'Frankfurt-01', type: 'Full Node', status: 'Healthy', latency: '12ms', ip: '142.251.32.46', uptime: '99.9%' },
    { id: 'Singapore-04', type: 'Validator', status: 'Healthy', latency: '45ms', ip: '34.102.134.11', uptime: '100%' },
    { id: 'NewYork-02', type: 'Relayer', status: 'Warning', latency: '180ms', ip: '104.18.2.144', uptime: '98.5%' },
    { id: 'London-03', type: 'Full Node', status: 'Healthy', latency: '24ms', ip: '185.199.108.153', uptime: '99.8%' },
  ];

  const logs = [
    { time: '10:45:12', event: 'Connection established', target: 'peer-4a91', status: 'success' },
    { time: '10:45:10', event: 'Block propagation', target: '#18293001', status: 'info' },
    { time: '10:45:08', event: 'Syncing headers', target: '99.2%', status: 'info' },
    { time: '10:45:05', event: 'Node discovery', target: '+12 peers', status: 'success' },
    { time: '10:45:02', event: 'Mem-pool update', target: '+142 txs', status: 'info' },
  ];

  return (
    <Layout title="Network Topology">
      <div className="flex-1 min-h-[calc(100vh-160px)] flex flex-col gap-6 relative">
        {/* Fullscreen Map Background */}
        <div 
          className="absolute inset-0 rounded-2xl border border-slate-200 dark:border-border-dark bg-[#0b0e14] overflow-hidden"
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYF_tU8hIInuH7n-2v_R_m8W_V-n3tT-A-V9-z0-j0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0-z0') ",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Mock Node Markers */}
          <div className="absolute top-[30%] left-[25%] group cursor-pointer">
            <div className="size-4 bg-primary rounded-full animate-pulse border-4 border-primary/20"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-background-dark/90 text-white text-[10px] px-2 py-1 rounded hidden group-hover:block whitespace-nowrap backdrop-blur-sm border border-white/10">North America - 1,240 Nodes</div>
          </div>
          <div className="absolute top-[40%] left-[50%] group cursor-pointer">
            <div className="size-4 bg-emerald-500 rounded-full animate-pulse border-4 border-emerald-500/20"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-background-dark/90 text-white text-[10px] px-2 py-1 rounded hidden group-hover:block whitespace-nowrap backdrop-blur-sm border border-white/10">Europe - 2,150 Nodes</div>
          </div>
          <div className="absolute top-[60%] left-[75%] group cursor-pointer">
            <div className="size-4 bg-orange-500 rounded-full animate-pulse border-4 border-orange-500/20"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-background-dark/90 text-white text-[10px] px-2 py-1 rounded hidden group-hover:block whitespace-nowrap backdrop-blur-sm border border-white/10">Asia - 840 Nodes</div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background-dark/60 to-transparent"></div>
        </div>

        {/* Floating Controls & Overlays */}
        <div className="relative z-10 flex flex-col h-full pointer-events-none p-6 gap-6">
          {/* Top Stats Bar */}
          <div className="flex gap-4 pointer-events-auto">
            {stats.map(s => (
              <div key={s.label} className="bg-background-dark/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-4">
                <div className="size-10 rounded-lg bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">{s.label}</p>
                  <p className="text-lg font-bold text-white leading-none">{s.value}</p>
                  <p className="text-[10px] text-emerald-400 font-bold mt-1">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-end justify-between gap-6">
            {/* Live Terminal Log */}
            <div className="w-96 bg-background-dark/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden pointer-events-auto flex flex-col max-h-64 shadow-2xl">
              <div className="p-3 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-emerald-500"></div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">Live Event Log</span>
                </div>
                <div className="flex gap-1">
                   <div className="size-2 rounded-full bg-white/10"></div>
                   <div className="size-2 rounded-full bg-white/10"></div>
                </div>
              </div>
              <div className="p-3 flex flex-col gap-2 overflow-y-auto font-mono text-[11px] h-48">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-slate-500 shrink-0">[{log.time}]</span>
                    <span className={log.status === 'success' ? 'text-emerald-400' : 'text-blue-400'}>{log.event}</span>
                    <span className="text-slate-400 truncate tracking-tighter">{log.target}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Node Inspector Sidebar (Simplified) */}
            <div className="w-80 bg-background-dark/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden pointer-events-auto flex flex-col shadow-2xl">
                <div className="p-4 border-b border-white/10 bg-white/5">
                  <h3 className="text-sm font-bold text-white">Node Inspector</h3>
                </div>
                <div className="p-4 flex flex-col gap-4 overflow-y-auto max-h-96">
                   {nodes.map(node => (
                     <div key={node.id} className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-xs font-bold text-white group-hover:text-primary transition-colors">{node.id}</span>
                           <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold ${node.status === 'Healthy' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-orange-500/20 text-orange-400'}`}>
                             {node.status}
                           </span>
                        </div>
                        <div className="grid grid-cols-2 gap-y-2 text-[10px]">
                           <div className="text-slate-500">Type: <span className="text-slate-300 font-medium">{node.type}</span></div>
                           <div className="text-slate-500">Latency: <span className="text-slate-300 font-medium">{node.latency}</span></div>
                           <div className="text-slate-500">Uptime: <span className="text-slate-300 font-medium">{node.uptime}</span></div>
                           <div className="text-slate-500">IP: <span className="text-slate-300 font-mono italic">{node.ip}</span></div>
                        </div>
                     </div>
                   ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Network;
