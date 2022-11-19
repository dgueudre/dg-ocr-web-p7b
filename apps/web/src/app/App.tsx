import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AccommodationPage from './pages/AccommodationPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.scss';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/accommodations/:id" element={<AccommodationPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
