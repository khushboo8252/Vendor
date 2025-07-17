import React from 'react';

import './App.css'
import Navbar from './components/Layout/Navbar';
import Login from './components/pages/LoginPage/LoginPage';
import DispatchLayout from './components/Layout/Dispatcher/DispatchLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<DispatchLayout/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App