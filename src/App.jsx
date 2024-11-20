import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Index from './routes/index/Index';
import IntroductionPage from './routes/introductionPage/IntroductionPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/introduction" element={<IntroductionPage />} />
      </Routes>
    </Router>
  )
}

export default App
