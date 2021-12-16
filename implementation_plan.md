# Blockchain Visualizer & Monitoring Application

Build a full-stack blockchain visualizer and monitoring application called "ChainSight" with 6 main pages based on provided design screens.

## Proposed Changes

### Project Structure

The application will be built using **Vite + React + TypeScript** for a fast, modern development experience with the following structure:

```
/chainsight
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css                 # Global styles + Tailwind
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx       # Side navigation
│   │   │   ├── Header.tsx        # Top header/navbar
│   │   │   └── Layout.tsx        # Main layout wrapper
│   │   ├── common/
│   │   │   ├── StatCard.tsx      # KPI stat cards
│   │   │   ├── DataTable.tsx     # Reusable data table
│   │   │   └── LineChart.tsx     # SVG line chart
│   │   └── [page-specific components]
│   └── pages/
│       ├── Dashboard.tsx         # Main dashboard
│       ├── Transactions.tsx      # Transaction explorer
│       ├── Blocks.tsx            # Block explorer
│       ├── Wallet.tsx            # Wallet/address monitor
│       ├── Network.tsx           # Network topology
│       └── Settings.tsx          # Settings page
```

---

### Component Breakdown

#### [NEW] Core Layout Components

| File                                | Purpose                                               |
| ----------------------------------- | ----------------------------------------------------- |
| `src/components/layout/Sidebar.tsx` | Left navigation with menu items, user profile         |
| `src/components/layout/Header.tsx`  | Top bar with search, network selector, wallet connect |
| `src/components/layout/Layout.tsx`  | Main layout wrapper combining sidebar + header        |

#### [NEW] Shared Components

| File                                  | Purpose                                     |
| ------------------------------------- | ------------------------------------------- |
| `src/components/common/StatCard.tsx`  | KPI cards with icon, value, trend indicator |
| `src/components/common/DataTable.tsx` | Sortable data table with hover states       |
| `src/components/common/LineChart.tsx` | SVG-based line chart with gradient fill     |
| `src/components/common/Badge.tsx`     | Status badges (success, pending, failed)    |

---

### Page Details

#### 1. Dashboard (`/`)

- KPI grid: Block Height, Network Hashrate, Avg Gas Price, Total Value Locked
- Transaction Volume chart with 1H/24H/7D toggle
- Network Status panel with Active Nodes, Propagation, Pending Tx
- Latest Blocks table (5 rows)
- Latest Transactions table (5 rows)

#### 2. Transaction Explorer (`/tx/:hash`)

- Transaction status card with success indicator
- Visual flow diagram (From → To)
- Quick stats: Block Height, Transaction Fee, Gas Price, Nonce
- Tabbed details: Overview, Internal Txns, Logs, State Changes
- Technical details: Gas Limit, Gas Used, Input Data

#### 3. Block Explorer (`/blocks` and `/block/:number`)

- Network stats: Block Height, TPS, Avg Gas, Last Finalized
- Latest blocks horizontal ribbon
- Block details panel: Height, Timestamp, Fee Recipient, Reward
- Transactions table with pagination

#### 4. Wallet Monitor (`/address/:address`)

- Address header with copy, QR, watch, share actions
- Stats grid: Net Worth, Total Transactions, Gas Spent, Last Active
- Portfolio Performance chart with time range selector
- Interaction Visualizer (graph-style connections)
- Recent Transactions table
- Assets panel with token allocation
- Top Counterparties list
- NFT Gallery preview

#### 5. Network Topology (`/network`)

- Global stats overlay: TPS, Block Height, Avg Latency, Validators
- Full-screen topology visualization (background image + node markers)
- Live Event Log (terminal-style with scrolling)
- Node Inspector sidebar with details, location map, peers list

#### 6. Settings (`/settings`)

- Settings sidebar navigation
- Appearance section: Dark/Light/System theme selector
- Visualizer config: Node density slider, Animation speed, toggles
- Network configuration: Primary network, Currency, Custom RPC

---

## Verification Plan

### Development Server Test

1. Run `npm run dev` in the project directory
2. Open browser to `http://localhost:5173`
3. Verify the application loads without console errors

### Visual Verification (Manual)

Navigate through each page and verify:

| Page         | URL              | Key Elements to Verify                             |
| ------------ | ---------------- | -------------------------------------------------- |
| Dashboard    | `/`              | KPI cards render, chart displays, tables show data |
| Transactions | `/tx/0x123`      | Status card, flow diagram, tabs work               |
| Blocks       | `/blocks`        | Stats cards, block ribbon scrolls, details panel   |
| Wallet       | `/address/0x71C` | Stats, chart, visualizer, assets panel             |
| Network      | `/network`       | Stats overlay, log scrolls, inspector sidebar      |
| Settings     | `/settings`      | Theme toggles work, sliders move, dropdowns open   |

### Build Verification

1. Run `npm run build` to verify production build completes
2. Run `npm run preview` to test production build locally
3. Verify no TypeScript or build errors

### Responsive Design Check

1. Open DevTools and test at different viewport widths:
   - Desktop: 1440px
   - Tablet: 768px
   - Mobile: 375px
2. Verify layouts adapt appropriately

---

## Implementation Order

1. **Project Setup** - Vite + React + Tailwind + React Router
2. **Theme & Styles** - Configure Tailwind theme, add fonts
3. **Layout Components** - Sidebar, Header, Layout wrapper
4. **Dashboard Page** - Primary page with all widgets
5. **Block Explorer** - Stats, ribbon, details, transactions table
6. **Transaction Explorer** - Detail view with tabs
7. **Wallet Monitor** - Complex page with multiple sections
8. **Network Topology** - Visualization with inspector
9. **Settings** - Configuration forms
10. **Final Polish** - Routing, transitions, responsive fixes
