import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import Users from '../Users'
import Addusers from '../Addusers'
// import Logout from '../Logout'
import ReadBooks from '../ReadBooks'
import Addbooks from './Addbooks'


const AdminPortal = () => {
  return (
      <>
          
          <Navbar />
          
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route element={<Books/>} path="/books"/>
        <Route element={<Addbooks />} path="/addbooks"/>
              <Route element={<Users/>} path="/users"/>
              <Route element={<Addusers/>} path="/addusers"/>
              <Route element={<ReadBooks />} path="/readbooks/:id" />
       
        
          </Routes>

    </>
  )
}

export default AdminPortal
