const Header = ({ title = "Overview" }: { title?: string }) => {
  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-slate-200 dark:border-border-dark bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-10 w-full">
      <div className="flex items-center gap-8 w-1/3">
        <h2 className="text-lg font-bold leading-tight hidden md:block">{title}</h2>
        {/* Search */}
        <div className="relative w-full max-w-sm group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
          </div>
          <input 
            type="text" 
            className="block w-full pl-10 pr-3 py-2 border-none rounded-lg bg-slate-100 dark:bg-border-dark/50 text-sm placeholder-slate-500 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all" 
            placeholder="Search block, tx hash, or address..." 
            onKeyDown={(e) => { 
              if(e.key === 'Enter') {
                e.preventDefault();
                console.log('Searching for:', e.currentTarget.value);
                // Here we would typically navigate or trigger a search state
              }
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Network Selector */}
        <div className="flex bg-slate-100 dark:bg-border-dark rounded-lg p-1">
          <button className="px-3 py-1 rounded-md bg-white dark:bg-surface-dark shadow-sm text-xs font-bold text-slate-900 dark:text-white">Mainnet</button>
          <button className="px-3 py-1 rounded-md text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors">Testnet</button>
          <button className="px-3 py-1 rounded-md text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors">Devnet</button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-border-dark rounded-lg transition-colors">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-background-dark"></span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
            <span>Connect Wallet</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
