import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import Thoughts from './pages/ThoughtsPage';
import Buildings from './pages/BuildingsPage';
import Notes from './pages/NotesPage';

const PageList = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/thoughts' element={<Thoughts />} />
            <Route path='/buildings' element={<Buildings />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/vlog' element={<div>Vlog Page</div>} />
            <Route path='/coaching' element={<div>Coaching Page</div>} />
            <Route path='/about-me' element={<div>About Me Page</div>} />
        </Routes>
    )
};

export default PageList;