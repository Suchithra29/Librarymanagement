import React, { useRef } from 'react'
import "./addusers.css"

const Addusers = () => {
    
  let fname = useRef()
  let lname = useRef()
  let dob = useRef()
  let Uimage = useRef()
  let uplace = useRef()
  let phone = useRef()
    
  let handlesubmit = (e) => {
  e.preventDefault()
   
    let newUser = {
      firstName: fname.current.value,
      lastName: lname.current.value,
      dateOfBirth:dob.current.value ,
      imageUrl: Uimage.current.value,
      place: uplace.current.value,
      userContact: phone.current.value  
     
    }
    
    fetch(`http://localhost:4000/users`, {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body:JSON.stringify(newUser)
    })
  }

  return (
    <>
      <div className="addusers">
        <form onSubmit={handlesubmit}>
          <input ref={fname} type="text" placeholder='Enter first name' />
          <input ref={lname} type="text" placeholder='Enter last name' /> 
          <input ref={dob} type="text" placeholder='Enter DOB(YYYY)'/>
          <input ref={Uimage} type="text" placeholder='Enter ImageUrl' />        
          <input ref={uplace} type="text" placeholder='Enter your place' />
          <input ref={phone} type="tel" placeholder='Enter your phone number' />
        
          <button>Add user</button>

        </form>
       </div>

    </>
  )
}

export default Addusers