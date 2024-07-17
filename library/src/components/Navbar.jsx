import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    

let loc = useLocation()
    let path = loc.pathname.startsWith("/adminportal");
  return (
      <>
          <div className="nav">
              
              
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1FUDpRsC2tmJ5s5TF8Ed5R0W-rCFMQq-bA&s" alt="" />
                  
                  {
                      path ? (
                          
                      <>
                      
                  <ul type='none'>
                  <li><NavLink to="/adminportal/">HOME</NavLink></li>
                  <li><NavLink to="/adminportal/books">BOOKS</NavLink></li>
                  <li><NavLink to="/adminportal/addbooks">ADD BOOKS</NavLink></li>
                  <li><NavLink to="/adminportal/users">USERS</NavLink></li>
                  <li><NavLink to="/adminportal/addusers">ADD USERS</NavLink></li>
                              <li><NavLink to="/">LOGOUT</NavLink></li>
                                  
                          </ul>
                      </>) :
                      

                      (
                          
                      <>
                      
                  <ul type='none'>
                  <li><NavLink to="/userportal/">HOME</NavLink></li>
                  <li><NavLink to="/userportal/books">BOOKS</NavLink></li>
                  <li><NavLink to="/userportal/users">USERS</NavLink></li>
                  <li><NavLink to="/">LOGOUT</NavLink></li>
                                  
                          </ul>
                      </>) 

                  }
            
            
                
          </div>     
         </>
  )
}

export default Navbar

  