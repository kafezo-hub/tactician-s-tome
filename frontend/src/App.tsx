import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MetaPage from './pages/MetaPage';
import CompPage from './pages/CompPage';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Keep the layout container */}
        <Navbar />
        <main className="flex-grow container mx-auto p-4"> {/* Keep the main content area */}
          <Routes>
            {/* Add a route at the root path that redirects to /meta */}
            <Route path="/" element={<Navigate to="/meta" replace />} />
            {/* The MetaPage is now the target of the redirect */}
            <Route path="/meta" element={<MetaPage />} />
            <Route path="/comp/:compId" element={<CompPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* Optional Footer here later */}
      </div>
    </Router>
  );
}

export default App;