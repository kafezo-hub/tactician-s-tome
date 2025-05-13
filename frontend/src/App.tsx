import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index';
// We'll create these pages next
// import ChampionTiersPage from './pages/tft/ChampionTiers';
// import ItemsPage from './pages/tft/Items';
// import TeamCompsPage from './pages/tft/TeamComps';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        {/* Placeholder routes for now */}
        {/* <Route path="/champion-tiers" element={<ChampionTiersPage />} /> */}
        {/* <Route path="/items" element={<ItemsPage />} /> */}
        {/* <Route path="/team-comps" element={<TeamCompsPage />} /> */}
        {/* Add a catch-all for 404 pages later if needed */}
      </Routes>
    </Router>
  );
}

export default App;