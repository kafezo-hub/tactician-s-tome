import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MetaPage from './pages/MetaPage';
import CompPage from './pages/CompPage'; // Import CompPage
import NotFound from '@/pages/NotFound'; // Import NotFound

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Keep the layout container */}
        <Navbar />
        <main className="flex-grow container mx-auto p-4"> {/* Keep the main content area */}
          <Routes>
            <Route path="/" element={<MetaPage />} /> {/* MetaPage is now the root */}
            <Route path="/comp/:compId" element={<CompPage />} /> {/* Add route for CompPage */}
            <Route path="*" element={<NotFound />} /> {/* Add NotFound route */}
          </Routes>
        </main>
        {/* Optional Footer here later */}
      </div>
    </Router>
  );
}

export default App;