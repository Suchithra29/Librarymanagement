import React, { useEffect, useRef, useState } from 'react'
import './users.css'

const Users = () => {

    let [users,setUsers]= useState([])


    useEffect(()=>{
        let fetchApi=async ()=>{
            let userurl = await fetch(`http://localhost:4000/users`);
            let resp=await userurl.json();
            setUsers(resp);

        }
        fetchApi();
    },[users]);
    
    // let age = dateOfBirth =>{
    //     let dateObj = new Date()
    //     let x = dateObj.getFullYear()-dateOfBirth
    //    }

    // let DeleteUser =(id,firstName)=>{
    //     let bool = window.confirm(`Do you want to Delete ${firstName} user...?`);
    //     if(bool){
    //      fetch(`http://localhost:4000/users/${id}` , {method:'DELETE'});
    //      alert(`${firstName} : user is Deleted`);
    //     }
    //     else{
    //      alert("user is not Deleted")
    //     }
    //    }
     
    
  
  return (
   <>
   <div className="userscard">
    {/* <img src={Userimg} alt="" /> */}
    {
        users.map((user)=>{
            let{firstName,lastName,imageUrl,dateOfBirth,place,userContact} = user;
            return(
                <>
                <div className="card">
                    <div className="user-card">
                        <div className="left">
                            <img src={imageUrl} alt="" />
                        </div>
                        <div className="right">
                            <div>
                                <h3>Users Info</h3>
                                <span className='head'>FirstName : </span>
                                <span>{firstName}</span> <br />
                                <span className='head'>LastName :</span>
                                <span>{lastName}</span> <br />
                                <span className='head'>Date Of Birth :</span>
                                <span>{dateOfBirth}</span> <br />
                                <span className='head'>Age :</span>
                                <span>{new Date().getFullYear()-dateOfBirth}</span> <br />
                                <span className='head'>Place :</span>
                                <span>{place}</span> <br />
                                <span className='head'>ContactNo :</span>
                                <span>{userContact}</span>
                            </div>
                            {/* <button>DeleteUser</button>
                            <button onClick={()=>{DeleteUser(id,firstName)}}>DeleteUser</button> */}
                        </div>
                    </div>
                </div>
                </>
            )
        })
    }
   </div>
   
   </>
  )
}

export default Users