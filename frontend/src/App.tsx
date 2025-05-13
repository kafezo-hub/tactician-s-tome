import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Remove imports for deleted pages
// import IndexPage from './pages/Index';
import Navbar from './components/Navbar';
import MetaPage from './pages/MetaPage';
// Remove import for deleted page
// import CompPage from './pages/CompPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            {/* Set MetaPage as the only route at the root path */}
            <Route path="/" element={<MetaPage />} />
            {/* Remove other routes */}
            {/* <Route path="/meta" element={<MetaPage />} /> */}
            {/* <Route path="/meta/:compId" element={<CompPage />} /> */}
            {/* <Route path="/champion-tiers" element={<ChampionTiersPage />} /> */}
            {/* <Route path="/items" element={<ItemsPage />} /> */}
            {/* <Route path="/team-comps" element={<TeamCompsPage />} /> */}
            {/* Remove 404 catch-all if it exists */}
          </Routes>
        </main>
        {/* Optional Footer here later */}
      </div>
    </Router>
  );
}

export default App;