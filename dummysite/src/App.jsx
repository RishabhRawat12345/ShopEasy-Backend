import React from 'react';
import Entery from './Entery';
import Login from './login/login';
import Signup from './login/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from './All';
import Men from './Allfashion/Men';
import Women from './Allfashion/Womens';
import Kids from './Allfashion/Kids'; 
import Shop from './Allfashion/Shop';
const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Entery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/All" element={<All/>}/>
        <Route path="/Men" element={<Men/>}/>
        <Route path="/Women" element={<Women/>}/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/Shop' element={<Shop/>}/>
      </Routes>
    
  );
};

export default App;
