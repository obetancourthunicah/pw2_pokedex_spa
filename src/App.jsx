import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PokeCard from './pages/PokeCard';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={(<Home />)}></Route>
        <Route path="/pokemon/:id/:name" element={(<PokeCard />)}></Route>
      </Routes>
    </Router>
  )
}

export default App
