import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import PageList from './PageList';
import { ThoughtsProvider } from './helper/ThoughtsContext';

function App() {
  return (
    <Router>
      <ThoughtsProvider>
        <PageList />
      </ThoughtsProvider>
    </Router>
    
  )
}

export default App
