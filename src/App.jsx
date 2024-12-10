
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './routes/index/index';
import IntroductionPage from './routes/introductionPage/IntroductionPage';
import MainPage from './routes/mainPage/MainPage';
import EventsInfo from './routes/EventsInfo/EventsInfo';
import EfficienciesInfo from './routes/EfficienciesInfo/EfficienciesInfo';
import FirstActionPage from './routes/FirstActionsPage/FirstActionPage';
import ResourcesInfo from './routes/ResourcesInfo/ResourcesInfo';
import ProjectsInfo from './routes/ProjectsInfo/ProjectsInfo';
import ProductsInfo from './routes/ProductsInfo/ProductsInfo';
import BoardGamePage from './routes/BoardGamePage/BoardGamePage';
import EficienciasModal from './routes/EficienciasModal/EficienciasModal';

function App() {
  const location = useLocation();
  const state = location.state && location.state.background; // Captura la ubicación de fondo

  return (
    <>
      <Routes location={state || location}>
        <Route path="/" element={<Index />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/eventsInfo" element={<EventsInfo />} />
        <Route path="/efficienciesInfo" element={<EfficienciesInfo />} />
        <Route path="/productsInfo" element={<ProductsInfo />} />
        <Route path="/projectsInfo" element={<ProjectsInfo />} />
        <Route path="/resourcesInfo" element={<ResourcesInfo />} />
        <Route path="/firstActions" element={<FirstActionPage />} />
        <Route path="/boardGame" element={<BoardGamePage />} />
        <Route path="/eficienciasModal" element={<EficienciasModal />} />
      </Routes>

      {/* Renderiza el modal de manera condicional */}
      {location.pathname === "/eficienciasModal" && <EficienciasModal />}
    </>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}