import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Userlogin = () => {

  let userInputVal = useRef()
  let userInputPas = useRef()
  let navigate = useNavigate();
  let err = useRef();

  let handleUserLogin =(e)=>{
    e.preventDefault()

    let credential = {
      loginName : 'User',
      loginPassword :"user123"
    };

    let {loginName,loginPassword} = credential;

    let user = userInputVal.current;
    let pswd=userInputPas.current;

    if(loginName === user.value && loginPassword === pswd.value){
      navigate('/userportal')
    }
    else{
      user.style.cssText = `border:solid 1px red`;
      pswd.style.cssText = `border:solid 1px red`;

      let errMsg = err.current;
      errMsg.innerText = "Wrong Credential";
      errMsg.style.cssText = `text-align:center;background:red;color:white;
                              font-weight: bold;
                              font-family:sans-serif;
                              font-size:14px;`
    }
  }
  return (
<>
<form onSubmit={handleUserLogin}>
<input ref={userInputVal} type="text" placeholder='Enter User Name' />
<hr />
<input ref={userInputPas} type="password" placeholder='Enter Password' />
<hr />
<button>User Login</button>
</form>
<div className="error" ref={err}></div>

</>
)
}

export default Userlogin