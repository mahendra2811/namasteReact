import React from 'react'


// normal user 
const User = (props) => {
    const {name , email , phone} = props ;
    console.log( name + "child render ");
    
  return (
    <div className='user-card' >
        <h2 >Name : {name} </h2>
        <h3>Email - {email}</h3>
        <p>Phone No. - {phone}</p>
      
    </div>
  )
}

export default User
