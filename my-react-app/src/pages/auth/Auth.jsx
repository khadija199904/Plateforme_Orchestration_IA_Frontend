import React from 'react'
import { useState } from 'react'
import Login from '../../components/login'
import Register from '../../components/register'
import './auth.css'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)

  const handleSwitch = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className='auth-page'>
      <div className="auth-content">
        <div className="title-container">
          <h1>
            WELCOME TO <span className="app-name">KE HYBRID-ANALYZER</span>
          </h1>
          <p className="sub-text">
            Where Zero-Shot meets Generative AI
          </p>
        </div>

        <div className="auth-box">
          {isLogin ? (
            <Login onSwitch={handleSwitch} className='box-login' />
          ) : (
            <Register onSwitch={handleSwitch} className = 'box-register'/>
          )}
        </div>

        <div className="matrix-footer">
          Powered by <span className="dev-name">Khadija ELAbbioui</span>
          <span className="cursor"></span>
        </div>
      </div>
    </div>
  )
}

export default Auth