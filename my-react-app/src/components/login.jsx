import React from 'react'
import { useState } from 'react'

const Login = ({onSwitch}) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const [error,setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        

         const payload = { username, password };

        try {

           const response = await fetch('http://127.0.0.1:8000/login', {
           method: "POST",
           headers: {
        'Content-Type': 'application/json',
      },
           body: JSON.stringify(payload),
    });
        const result = await response.json()
        console.log(result)

        if (!response.ok){
         const err = await response.json()
         setError(result.err)
                        }
    
      
       } catch (err) {
        setError(err.message)
  
      } finally {
  
      }

    }
  return (
    <div className='box-login'>

    <form onSubmit={handleSubmit}>
        <h2>Se Connecter</h2>
     <label htmlFor="username">Nom d'utilisateur</label> <br />
     <input type="text" id="username"  placeholder='username' 
            value={username}
            onChange={(e)=> setUsername(e.target.value)} />

    <br />
    
     <label htmlFor="password">Mot de passe</label> <br />
     <input type="password" id="password" placeholder='********'
            value={password}
            onChange={(e)=> setPassword(e.target.value)} /><br />
     <button type='submit'>Connection</button>
    </form>

    <p>Pas encore de compte ?
        <span className= 'switch' onClick={onSwitch} style={{ color: "blue", cursor: "pointer" }}> S'inscrire</span>
    </p>




    </div>

   
  )
}

export default Login