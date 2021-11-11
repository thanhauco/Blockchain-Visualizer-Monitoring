import Layout from '../components/layout/Layout';
import StatCard from '../components/common/StatCard';

const Dashboard = () => {
  const stats = [
    { label: 'Block Height', value: '18,234,912', icon: 'layers', trend: { value: '1.2%', isUp: true } },
    { label: 'Network Hashrate', value: '450 TH/s', icon: 'bolt', trend: { value: '5.4%', isUp: true }, iconColor: 'text-blue-500', iconBg: 'bg-blue-500/10' },
    { label: 'Avg Gas Price', value: '12 gwei', icon: 'local_gas_station', trend: { value: '12.1%', isUp: false }, iconColor: 'text-orange-500', iconBg: 'bg-orange-500/10' },
    { label: 'Total Value Locked', value: '$42.5B', icon: 'lock', trend: { value: '0.8%', isUp: true }, iconColor: 'text-purple-500', iconBg: 'bg-purple-500/10' },
  ];

  return (
    <Layout title="Overview">
      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      
      <div className="flex flex-col gap-6">
        <div className="h-64 rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-6 flex items-center justify-center italic text-slate-400">
          Transaction Volume Chart Placeholder
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
