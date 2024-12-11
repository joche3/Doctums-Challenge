import { useState } from 'react';
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
import ProjectsModal from './routes/ProjectsModal/ProjectsModal';
import ProductsModal from './routes/ProductsModal/ProductsModal';
import ResourcesModal from './routes/ResourcesModal/ResourcesModal';
import EventsModal from './routes/EventsModal/EventsModal';
import EndGameModal from './routes/EndGameModal/EndGameModal';

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
        <Route path="/projectsModal" element={<ProjectsModal />} />
        <Route path="/productsModal" element={<ProductsModal />} />
        <Route path="/resourcesModal" element={<ResourcesModal />} />
        <Route path="/events" element={<EventsModal />} />
        <Route path="/endGame" element={<EndGameModal />} />
      </Routes>

      {/* Renderiza el modal de manera condicional */}
      {location.pathname === "/eficienciasModal" && <EficienciasModal />}
      {location.pathname === "/projectsModal" && <ProjectsModal />}
      {location.pathname === "/productsModal" && <ProductsModal />}
      {location.pathname === "/resourcesModal" && <ResourcesModal />}
      {location.pathname === "/eventsInfo" && <EventsInfo />}
      {location.pathname === "/efficienciesInfo" && <EfficienciesInfo />}
      {location.pathname === "/productsInfo" && <ProductsInfo />}
      {location.pathname === "/projectsInfo" && <ProjectsInfo />}
      {location.pathname === "/resourcesInfo" && <ResourcesInfo />}
      {location.pathname === "/events" && <EventsModal />}
      {location.pathname === "/endGame" && <EndGameModal />}
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