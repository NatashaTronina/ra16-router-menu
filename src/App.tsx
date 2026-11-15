import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import DriftPage from './pages/DriftPage';
import ForzaPage from './pages/ForzaPage';
import HomePage from './pages/HomePage';
import TimeAttackPage from './pages/TimeAttackPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
