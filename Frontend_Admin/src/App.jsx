import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/Landing';
import AboutPage from './pages/About';
import CalendarPage from './pages/Calendar'; 
import MenuPage from './pages/Menu';
import ShoppingPage from './pages/Shopping';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
      </Routes>
  );
}

export default App;
