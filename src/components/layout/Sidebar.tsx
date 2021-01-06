import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/' },
    { name: 'Nodes', icon: 'hub', path: '/network' },
    { name: 'Blocks', icon: 'deployed_code', path: '/blocks' },
    { name: 'Transactions', icon: 'swap_horiz', path: '/transactions' },
    { name: 'Tokens', icon: 'token', path: '#' },
  ];

  const systemItems = [
    { name: 'Settings', icon: 'settings', path: '/settings' },
    { name: 'Support', icon: 'help', path: '#' },
  ];

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col border-r border-slate-200 dark:border-border-dark bg-white dark:bg-[#111318] h-full z-20">
      <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-200 dark:border-border-dark">
        <div 
          className="bg-center bg-no-repeat bg-cover rounded-full h-8 w-8 bg-primary" 
          style={{ backgroundImage: 'linear-gradient(135deg, #135bec 0%, #4facfe 100%)' }}
        ></div>
        <h1 className="text-xl font-bold tracking-tight">ChainSight</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="px-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Menu</p>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary/10 text-primary dark:text-white dark:bg-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-border-dark'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <p className="px-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">System</p>
          {systemItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary/10 text-primary dark:text-white dark:bg-primary'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-border-dark'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-border-dark">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-border-dark cursor-pointer transition-colors">
          <div className="h-8 w-8 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7vdpf2CYT5U4DxVh3BXvTmDlc_SZ7NrCMVCWkXL10kF9Y4aBC-pPYvh6Qu7_0Q70YsgrS_t-eieOFRUc3A37Dzn1PHaRmU1mU920fZRBSD29T6NDxcB56IqQjIuKbidQ0UPq98xgw6r5KSR6z4DeJ6QXtTUmnROnraLbSo1w1novSCXHavkd6kIKmYcPs9Kh8pLrEkCToYFLzUs9bo_jdX60zI8_naRpF5kDDmxW6G23MZ9IT81VGcASI5xgTsXNweAZYcPuVUdM" 
              alt="Alex Dev" 
              className="h-full w-full object-cover" 
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold leading-none">Alex Dev</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
