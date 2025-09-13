import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import PersonalJourneyPage from './pages/PersonalJourney';
import Portfolio from './pages/Portfolio';
import PortfolioSlide from './components/PortfolioSlide';

function App() {
  return (
    <Router>
      
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/personal-journey' element={<PersonalJourneyPage />} />
      <Route path='/portfolio' element={<PortfolioSlide />} />
      <Route path='/vlog' element={<div>Vlog Page</div>} />
      <Route path='/coaching' element={<div>Coaching Page</div>} />
      <Route path='/about-me' element={<div>About Me Page</div>} />
    </Routes>
    </Router>
    
  )
}

export default App
