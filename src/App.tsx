import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import PageList from './PageList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <PageList />
    </Router>
  )
}

export default App
