import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import PersonalJourneyPage from './pages/PersonalJourney';

const PageList = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/personal-journey' element={<PersonalJourneyPage />} />
            <Route path='/vlog' element={<div>Vlog Page</div>} />
            <Route path='/coaching' element={<div>Coaching Page</div>} />
            <Route path='/about-me' element={<div>About Me Page</div>} />
        </Routes>
    )
};

export default PageList;