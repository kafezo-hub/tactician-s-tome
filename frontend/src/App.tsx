import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index';
import Navbar from './components/Navbar'; // Import the Navbar component
// We'll create these pages next
// import ChampionTiersPage from './pages/tft/ChampionTiers';
// import ItemsPage from './pages/tft/Items';
// import TeamCompsPage from './pages/tft/TeamComps';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Added a flex container for layout */}
        <Navbar /> {/* Place the Navbar here */}
        <main className="flex-grow container mx-auto p-4"> {/* Main content area */}
          <Routes>
            <Route path="/" element={<IndexPage />} />
            {/* Placeholder routes for now */}
            {/* <Route path="/champion-tiers" element={<ChampionTiersPage />} /> */}
            {/* <Route path="/items" element={<ItemsPage />} /> */}
            {/* <Route path="/team-comps" element={<TeamCompsPage />} /> */}
            {/* Add a catch-all for 404 pages later if needed */}
          </Routes>
        </main>
        {/* Optional Footer here later */}
      </div>
    </Router>
  );
}

export default App;