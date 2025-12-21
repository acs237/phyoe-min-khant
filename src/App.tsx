import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import PageList from './PageList';
import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

function App() {
  return (
    <Router>
      
      <PageList />
    </Router>
    
  )
    /* type Instrument = {
      id: number;      // adjust to your schema
      name: string;
    };
    const [instruments, setInstruments] = useState<Instrument[]>([]);
    useEffect(() => {
      getInstruments();
    }, []);
    async function getInstruments() {
      const { data, error } = await supabase.from("instruments").select();
      console.log({ data, error});
      setInstruments(data as Instrument[]);
    }
    return (
      <div>
        <h1>Instruments</h1>
        
        <ul>
        {instruments.map((instrument) => (
          <li key={instrument.id}>{instrument.name}</li>
        ))}
      </ul>
    </div>
    ); */
}

export default App
