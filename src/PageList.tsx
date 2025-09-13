import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import Writing from './pages/Writing';
import Portfolio from './pages/Portfolio';

const PageList = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/writing' element={<Writing />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/vlog' element={<div>Vlog Page</div>} />
            <Route path='/coaching' element={<div>Coaching Page</div>} />
            <Route path='/about-me' element={<div>About Me Page</div>} />
        </Routes>
    )
};

export default PageList;