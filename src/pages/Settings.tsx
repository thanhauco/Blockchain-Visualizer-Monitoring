import Layout from '../components/layout/Layout';

const Settings = () => {
  const settingsNav = [
    { id: 'appearance', label: 'Appearance', icon: 'palette', active: true },
    { id: 'visualizer', label: 'Visualizer', icon: 'animation' },
    { id: 'network', label: 'Network', icon: 'settings_ethernet' },
    { id: 'notifications', label: 'Notifications', icon: 'notifications' },
    { id: 'account', label: 'Account', icon: 'person' },
  ];

  return (
    <Layout title="Settings">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Settings Navigation Sidebar */}
        <div className="w-full lg:w-64 shrink-0 flex flex-col gap-1 p-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl">
          {settingsNav.map(item => (
            <button 
              key={item.id} 
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                item.active 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-slate-500 dark:text-text-secondary hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          {/* Appearance Section */}
          <section className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-border-dark">
              <h3 className="font-bold text-lg">Appearance Settings</h3>
              <p className="text-sm text-slate-500 dark:text-text-secondary mt-1">Customize how the dashboard looks and feels.</p>
            </div>
            <div className="p-6 flex flex-col gap-8">
              {/* Theme Selector */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                   <p className="text-sm font-bold mb-3">Color Theme</p>
                   <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-3 p-3 border-2 border-primary bg-primary/5 rounded-xl cursor-pointer">
                        <div className="size-4 rounded-full border-4 border-primary bg-white"></div>
                        <span className="text-sm font-medium">Dark Mode (Default)</span>
                      </label>
                      <label className="flex items-center gap-3 p-3 border-2 border-slate-100 dark:border-border-dark rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                        <div className="size-4 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white"></div>
                        <span className="text-sm font-medium">Light Mode</span>
                      </label>
                   </div>
                </div>
                {/* Visual Density */}
                <div>
                   <p className="text-sm font-bold mb-3">Interface Density</p>
                   <div className="flex bg-slate-100 dark:bg-border-dark/50 p-1 rounded-xl">
                      {['Compact', 'Standard', 'Relaxed'].map(d => (
                        <button key={d} className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${d === 'Standard' ? 'bg-white dark:bg-surface-dark shadow text-primary' : 'text-slate-500'}`}>{d}</button>
                      ))}
                   </div>
                </div>
                {/* Update Frequency */}
                <div>
                   <p className="text-sm font-bold mb-3">Live Update Speed</p>
                   <input type="range" className="w-full h-1.5 bg-slate-200 dark:bg-border-dark rounded-full appearance-none cursor-pointer accent-primary" />
                   <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400 uppercase">
                      <span>Real-time</span>
                      <span>Every 10s</span>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Network Configuration Section */}
          <section className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-border-dark">
              <h3 className="font-bold text-lg">Network Configuration</h3>
              <p className="text-sm text-slate-500 dark:text-text-secondary mt-1">Manage network endpoints and display currency.</p>
            </div>
            <div className="p-6 flex flex-col gap-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                     <label className="text-sm font-bold">Primary Network</label>
                     <select className="bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all">
                        <option>Ethereum Mainnet (ID: 1)</option>
                        <option>Polygon POS (ID: 137)</option>
                        <option>Arbitrum One (ID: 42161)</option>
                        <option>Optimism (ID: 10)</option>
                     </select>
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-sm font-bold">Display Currency</label>
                     <select className="bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all">
                        <option>USD - US Dollar ($)</option>
                        <option>EUR - Euro (€)</option>
                        <option>BTC - Bitcoin (₿)</option>
                        <option>ETH - Ethereum (Ξ)</option>
                     </select>
                  </div>
               </div>
               
               <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold">Custom RPC Terminal</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="https://mainnet.infura.io/v3/your-key" 
                      className="w-full bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark rounded-lg p-3 pl-10 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">link</span>
                  </div>
                  <p className="text-[10px] text-slate-500 italic">Connected to: Alchemy Secure Gateway (Latency: 24ms)</p>
               </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 mt-2">
             <button className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">Discard Changes</button>
             <button className="px-8 py-2.5 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">Save Changes</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
