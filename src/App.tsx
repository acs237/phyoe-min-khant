import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import PersonalJourneyPage from './pages/PersonalJourney';

function App() {
  return (
    <Router basename='/phyoe-min-khant'>
      
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/personal-journey' element={<PersonalJourneyPage />} />
      <Route path='/vlog' element={<div>Vlog Page</div>} />
      <Route path='/coaching' element={<div>Coaching Page</div>} />
      <Route path='/about-me' element={<div>About Me Page</div>} />
    </Routes>
    </Router>
    
  )
}

export default App
