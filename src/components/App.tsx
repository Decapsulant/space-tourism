import React from 'react';
import {Routes, Route} from "react-router-dom"
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Header from './Header';
import Home from './pages/Home';
import  NotFound  from './pages/NotFound';
import Technology from './pages/Technology';

function App() {

return(
<>
    
        
      
      <Header/>
      <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/destination" element={<Destination/>}/>
          <Route path="/crew" element={<Crew/>}/>
          <Route path="/technology" element={<Technology/>}/>
          <Route path="/*" element={<NotFound/>}/>
      </Routes>
      
</>
)
}

export default App;
