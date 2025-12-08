import React from 'react'
import { useState } from 'react'
import Login from '../../components/login'
import Register  from '../../components/register'


const Auth = () => {
    const  [isLogin,setIsLogin] = useState(true)

    const handleSwitch = () => {setIsLogin(!isLogin); };

    
  return (
    
   
    <div>

     {isLogin ? 
     (<Login onSwitch={handleSwitch} />

     ) : (
     <Register onSwitch={handleSwitch} />
     )
     }
    </div>
   
   
  )
}

export default Auth