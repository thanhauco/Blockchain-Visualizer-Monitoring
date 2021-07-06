import Layout from '../components/layout/Layout';
import StatCard from '../components/common/StatCard';
import LineChart from '../components/common/LineChart';
import NetworkStatus from '../components/common/NetworkStatus';
import DataTable from '../components/common/DataTable';

const Dashboard = () => {
  const stats = [
    { label: 'Block Height', value: '18,234,912', icon: 'layers', trend: { value: '1.2%', isUp: true } },
    { label: 'Network Hashrate', value: '450 TH/s', icon: 'bolt', trend: { value: '5.4%', isUp: true }, iconColor: 'text-blue-500', iconBg: 'bg-blue-500/10' },
    { label: 'Avg Gas Price', value: '12 gwei', icon: 'local_gas_station', trend: { value: '12.1%', isUp: false }, iconColor: 'text-orange-500', iconBg: 'bg-orange-500/10' },
    { label: 'Total Value Locked', value: '$42.5B', icon: 'lock', trend: { value: '0.8%', isUp: true }, iconColor: 'text-purple-500', iconBg: 'bg-purple-500/10' },
  ];

  const latestBlocks = [
    { height: '#18234912', time: '12s ago', proposer: 'Validator_99', txs: 142, reward: '2.4 ETH', color: 'from-blue-400 to-purple-500' },
    { height: '#18234911', time: '24s ago', proposer: 'Binance Pool', txs: 204, reward: '3.1 ETH', color: 'from-yellow-400 to-orange-500' },
    { height: '#18234910', time: '36s ago', proposer: 'Lido', txs: 98, reward: '1.8 ETH', color: 'from-green-400 to-emerald-600' },
    { height: '#18234909', time: '48s ago', proposer: 'Coinbase', txs: 156, reward: '2.2 ETH', color: 'from-pink-400 to-red-500' },
    { height: '#18234908', time: '1m ago', proposer: 'F2Pool', txs: 188, reward: '2.9 ETH', color: 'from-cyan-400 to-blue-500' },
  ];

  const latestTransactions = [
    { hash: '0x7d...3a12', time: '2s ago', from: '0x44...90a', to: '0x88...12b', value: '12.5 ETH', usd: '$32,450', icon: 'description' },
    { hash: '0x3b...99c1', time: '5s ago', from: '0x21...bbc', to: 'Uniswap V3', value: '0.45 ETH', usd: '$1,150', icon: 'code' },
    { hash: '0x9a...22d4', time: '8s ago', from: '0x11...abc', to: '0x33...def', value: '100.0 ETH', usd: '$265,000', icon: 'description' },
    { hash: '0x1c...55a2', time: '12s ago', from: '0x55...33a', to: 'Aave V3', value: '5.2 ETH', usd: '$13,500', icon: 'code' },
    { hash: '0x8f...11b0', time: '15s ago', from: '0x99...22a', to: '0x12...99c', value: '0.05 ETH', usd: '$128', icon: 'description' },
  ];

  return (
    <Layout title="Overview">
      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Main Charts & Network Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LineChart 
            title="Transaction Volume"
            subtitleValue="2,450 TPS"
            subtitleTrend="+15%"
            timeRanges={['1H', '24H', '7D']}
            activeRange="1H"
            dataPaths="M0,250 Q100,200 200,220 T400,150 T600,180 T800,100 T1000,120"
            labels={['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']}
          />
        </div>
        <div className="lg:col-span-1">
          <NetworkStatus />
        </div>
      </div>

      {/* Live Data Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Blocks */}
        <DataTable
          title="Latest Blocks"
          titleIcon={<span className="material-symbols-outlined text-slate-400">deployed_code</span>}
          action={<button className="text-xs font-bold text-primary hover:text-primary/80 uppercase">View All</button>}
          columns={[
            { header: 'Block Height' },
            { header: 'Proposer' },
            { header: 'Txs' },
            { header: 'Reward', className: 'text-right' },
          ]}
        >
          {latestBlocks.map((block) => (
            <tr key={block.height} className="hover:bg-slate-50 dark:hover:bg-border-dark/50 transition-colors group cursor-pointer">
              <td className="px-4 py-3">
                <span className="text-primary font-bold">{block.height}</span>
                <div className="text-xs text-slate-400 mt-0.5">{block.time}</div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${block.color}`}></div>
                  <span className="text-slate-700 dark:text-slate-300 font-mono text-xs">{block.proposer}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{block.txs}</td>
              <td className="px-4 py-3 text-right font-medium text-slate-900 dark:text-white">{block.reward}</td>
            </tr>
          ))}
        </DataTable>

        {/* Latest Transactions */}
        <DataTable
          title="Latest Transactions"
          titleIcon={<span className="material-symbols-outlined text-slate-400">swap_horiz</span>}
          action={<button className="text-xs font-bold text-primary hover:text-primary/80 uppercase">View All</button>}
          columns={[
            { header: 'Tx Hash' },
            { header: 'From / To' },
            { header: 'Value', className: 'text-right' },
          ]}
        >
          {latestTransactions.map((tx) => (
            <tr key={tx.hash} className="hover:bg-slate-50 dark:hover:bg-border-dark/50 transition-colors group cursor-pointer">
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded bg-slate-100 dark:bg-border-dark text-slate-500">
                    <span className="material-symbols-outlined text-[16px]">{tx.icon}</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-primary">{tx.hash}</p>
                    <p className="text-[10px] text-slate-400">{tx.time}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-col gap-0.5 font-mono text-xs">
                  <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                    <span className="text-[10px] text-slate-400 w-8">From:</span> {tx.from}
                  </div>
                  <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                    <span className="text-[10px] text-slate-400 w-8">To:</span> {tx.to}
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-right">
                <div className="font-bold text-slate-900 dark:text-white">{tx.value}</div>
                <div className="text-xs text-slate-400">{tx.usd}</div>
              </td>
            </tr>
          ))}
        </DataTable>
      </div>
    </Layout>
  );
};

export default Dashboard;
