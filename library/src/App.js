import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AdminPortal from './components/Admin/AdminPortal'
import Userportal from './components/Userportal'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage/>} path='/'/>
          <Route element={<AdminPortal/>} path='/adminportal/*'/>
          <Route element={<Userportal/>} path='/userportal/*'/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App