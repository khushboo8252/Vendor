import React from 'react';

import './App.css'
import Navbar from './components/Layout/Navbar';
import Login from './components/pages/LoginPage/LoginPage';
import DispatchLayout from './components/Layout/Dispatcher/DispatchLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Orders from './components/Layout/Admin/pages/Orders';
import Vendors from './components/Layout/Admin/pages/Vendors';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<DispatchLayout/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/vendors' element={<Vendors/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App