import React from 'react'
import { useState } from 'react'

const Auth = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
  return (
    <form>
    <div className='box-login' >
    <h2>Login</h2>
     <input type="text" placeholder='username' value={username} 
       onChange={(e)=> setUsername(e.target.value)} /> 
     </div> 
     <div className='box-login'>
     <input type="password" placeholder='**********'value={password} 
       onChange={(e)=> setPassword(e.target.value)}/>
    </div> 
    <div>
       <button className='btn' type='submit'> login</button>
    </div>
    
    

    
    </form>
   
  )
}

export default Auth