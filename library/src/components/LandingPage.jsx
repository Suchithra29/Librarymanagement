import React, { useState } from 'react'
import "./landing.css"
import Adminlogin from './Adminlogin'
import Userlogin from './Userlogin'

const LandingPage = () => {
    let [bool, setBool] = useState(true)
    
    let handleClick = () => {
        setBool(!bool)
    
    }
  return (
      <>
          <div className="landing">
              <div className="containers">
              <div className="btn-container">
                      <button onClick={handleClick} className={bool ? 'admin' : 'userBtn' }>
                          {bool ? 'Admin login' : 'User Login'}
                      </button>
                  </div>
                  {bool ? <h1 id='c'>Admin Login</h1> : <h1 id='b'>User Login</h1>}
                  {bool ? 
                     <Adminlogin/> :<Userlogin/>
                          }
              </div>
              </div>
      </>
  )
}

export default LandingPage