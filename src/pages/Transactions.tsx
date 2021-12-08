import Layout from '../components/layout/Layout';

const Transactions = () => {
  return (
    <Layout title="Transaction Details">
      <div className="flex flex-col gap-6">
        {/* Breadcrumb & Heading */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Home</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span>Blockchain</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-slate-900 dark:text-white">Transaction Details</span>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">Transaction Details</h1>
              <div className="flex items-center flex-wrap gap-2 text-slate-500 dark:text-slate-400 font-mono text-sm sm:text-base break-all">
                <span className="bg-slate-100 dark:bg-surface-dark px-2 py-1 rounded border border-slate-200 dark:border-border-dark text-slate-900 dark:text-white">0x3f5ce5fb812c3b88950a9e72</span>
                <button className="p-1 hover:bg-slate-200 dark:hover:bg-white/10 rounded transition-colors text-primary" title="Copy">
                  <span className="material-symbols-outlined text-[18px]">content_copy</span>
                </button>
                <button className="p-1 hover:bg-slate-200 dark:hover:bg-white/10 rounded transition-colors text-primary" title="QR Code">
                  <span className="material-symbols-outlined text-[18px]">qr_code</span>
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-border-dark transition-colors">
                <span className="material-symbols-outlined text-[18px]">code</span>
                View Raw
              </button>
            </div>
          </div>
        </div>

        {/* High Level Status & Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Status Card */}
          <div className="lg:col-span-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Status</p>
              <div className="flex items-center gap-3 mb-1">
                <span className="material-symbols-outlined text-green-500 text-[28px] fill">check_circle</span>
                <span className="text-2xl font-bold text-green-500">Success</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Confirmed by 1,240 blocks</p>
            </div>
            <div className="mt-8 pt-6 border-t border-dashed border-slate-200 dark:border-border-dark">
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">Timestamp</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-[16px]">schedule</span>
                  <span className="font-medium">12 secs ago</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">(Oct-27-2023 10:45:12 AM)</p>
              </div>
            </div>
          </div>

          {/* Visual Flow */}
          <div className="lg:col-span-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#282e39 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              {/* From */}
              <div className="flex flex-col items-center md:items-start gap-3 flex-1 w-full md:w-auto">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-slate-500 dark:text-slate-400 text-xs uppercase font-bold tracking-wider">From</p>
                  <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-0.5 rounded border border-blue-500/20">Sender</span>
                </div>
                <div className="flex items-center gap-3 w-full p-3 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark">
                  <div className="size-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-[20px]">person</span>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-mono truncate text-primary hover:underline cursor-pointer">0x7a250d...5cc8</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Binance 2</p>
                  </div>
                  <button className="ml-auto text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" title="Copy Address"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
                </div>
              </div>
              {/* Arrow Flow */}
              <div className="flex flex-col items-center justify-center gap-1 shrink-0 px-4">
                <p className="text-lg font-bold">2.5 ETH</p>
                <div className="relative w-32 h-1 bg-slate-200 dark:bg-border-dark rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-primary animate-pulse"></div>
                </div>
                <span className="material-symbols-outlined text-primary text-[24px] rotate-90 md:rotate-0 mt-1">arrow_forward</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">$4,200.50 USD</p>
              </div>
              {/* To */}
              <div className="flex flex-col items-center md:items-end gap-3 flex-1 w-full md:w-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded border border-green-500/20">Receiver</span>
                  <p className="text-slate-500 dark:text-slate-400 text-xs uppercase font-bold tracking-wider">To</p>
                </div>
                <div className="flex items-center gap-3 w-full p-3 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark flex-row-reverse text-right">
                  <div className="size-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-[20px]">token</span>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-mono truncate text-primary hover:underline cursor-pointer">0x8b311e...9d21</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Uniswap V3 Router</p>
                  </div>
                  <button className="mr-auto text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" title="Copy Address"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg p-4 flex flex-col gap-1">
            <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Block Height</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">view_in_ar</span>
              <a className="text-lg font-bold text-primary hover:underline" href="#">18,483,921</a>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg p-4 flex flex-col gap-1">
            <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Transaction Fee</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-[20px]">local_gas_station</span>
              <span className="text-lg font-bold">0.0021 ETH</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">($3.54)</span>
          </div>
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg p-4 flex flex-col gap-1">
            <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Gas Price</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-[20px]">speed</span>
              <span className="text-lg font-bold">25 Gwei</span>
            </div>
          </div>
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg p-4 flex flex-col gap-1">
            <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Nonce</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-[20px]">numbers</span>
              <span className="text-lg font-bold">142</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
