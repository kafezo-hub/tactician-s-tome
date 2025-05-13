import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index';
import Navbar from './components/Navbar';
import MetaPage from './pages/MetaPage'; // Import the new MetaPage

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/meta" element={<MetaPage />} /> {/* Add the route for MetaPage */}
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