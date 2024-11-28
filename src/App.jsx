import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import RegulationsPage from './pages/RegulationsPage';
import HistoryPage from './pages/HistoryPage';
import DepartmentsPage from './pages/DepartmentsPage';
import RanksPage from './pages/RanksPage';
import LinksPage from './pages/LinksPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cyber-darker text-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regulations" element={<RegulationsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/ranks" element={<RanksPage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </div>
    </Router>
  );
}