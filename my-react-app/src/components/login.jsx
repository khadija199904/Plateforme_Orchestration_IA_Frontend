import React from 'react'
import { useState } from 'react'

const Login = (onSwitch) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async () => {
     







    }
  return (
    <div className='box_login'>

    <form>
        <h2>Se Connecter</h2>
     <input type="text" name="Nom d'utilisateur" placeholder='username' 
            value={username}
            onChange={(e)=> setUsername(e.target.value)} />
     <br />
     <input type="password" name="Mot de pass" placeholder='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)} /><br />
     <button type='submit'>Connection</button>
    </form>

    <p>Pas encore de compte ?
        <span onClick={onSwitch} className="switch-link"> S'inscrire</span>
    </p>




    </div>

   
  )
}

export default Login