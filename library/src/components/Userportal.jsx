import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Books from './Books'
import ReadBooks from './ReadBooks'


const Userportal = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Books/>} path='/books/'/>
            <Route element={<Users/>} path='/users/'/>
            <Route element={<ReadBooks/>} path='/readbooks/:id'/>

        </Routes>
    </div>
  )
}

export default Userportal