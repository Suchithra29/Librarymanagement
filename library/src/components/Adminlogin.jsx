import React, { useRef } from 'react'
import {useNavigate } from 'react-router-dom';

const Adminlogin = () => {
    let adminEmail = useRef();
    let adminPswd = useRef();

    let navigate=useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let emailVal = adminEmail.current
        let pswdVal = adminPswd.current  //checking current value
        
        let credential = {
            email: "hk@gmail.com",
            password:"hk123"
        }

        let { email, password } = credential  //destructuring
        
        if (emailVal.value === email && pswdVal.value === password)
        {
            navigate("/adminportal")
        }
        else {
            emailVal.style.cssText = "border:solid 2px red"
            pswdVal.style.cssText="border:solid 2px red"
        }
    }

  return (
      <div>
           <form action="" onSubmit={handleSubmit}>
                          <input type="email" placeholder='Enter the Email'  ref={adminEmail}/>
                          <input type="password" placeholder='Enter the Password' ref={adminPswd} />
                         
                          <button>Submit</button>
                      </form>
    </div>
  )
}

export default Adminlogin