import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import '../src/styles/global.scss'
import Game from './pages/Game';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:slug" element={<Game />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
