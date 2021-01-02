import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts (to be created)
// import Layout from './components/layout/Layout';

// Pages (placeholders for now)
const Dashboard = () => <div>Dashboard</div>;
const Blocks = () => <div>Blocks</div>;
const Transactions = () => <div>Transactions</div>;
const Wallet = () => <div>Wallet</div>;
const Network = () => <div>Network</div>;
const Settings = () => <div>Settings</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/address/:address" element={<Wallet />} />
        <Route path="/network" element={<Network />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
