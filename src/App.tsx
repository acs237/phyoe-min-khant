import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import PersonalJourneyPage from './pages/PersonalJourney';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/pmk-personal-portfolio' element={<HomePage />} />
      <Route path='/pmk-personal-portfolio/personal-journey' element={<PersonalJourneyPage />} />
      <Route path='/pmk-personal-portfolio/vlog' element={<div>Vlog Page</div>} />
      <Route path='/pmk-personal-portfolio/coaching' element={<div>Coaching Page</div>} />
      <Route path='/pmk-personal-portfolio/about-me' element={<div>About Me Page</div>} />
    </Routes>
    </Router>
    
  )
}

export default App
