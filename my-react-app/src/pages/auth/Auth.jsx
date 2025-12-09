import React from 'react'
import { useState } from 'react'
import Login from '../../components/login'
import Register  from '../../components/register'
import './auth.css';
// import './TEST.css'


const Auth = () => {
    const  [isLogin,setIsLogin] = useState(true)

    const handleSwitch = () => {setIsLogin(!isLogin); };

    
  return (
    
   
    <div className='page'>
       <div className="title-container">
        <h1>
          WELCOME TO <span className="app-name">KE HYBRID-ANALYZER</span>
        </h1>
        <p className="sub-text">
          Where Zero-Shot meets Generative AI
        </p>
      </div>

     {isLogin ? 
     (<Login onSwitch={handleSwitch} />

     ) : (
     <Register onSwitch={handleSwitch} />
     )
     }
     <div className="matrix-footer">
        Powered by <span className="dev-name">Khadija ELAbbioui</span><span className="cursor"></span>
      </div>
    </div>
   
   
  )
}

export default Auth