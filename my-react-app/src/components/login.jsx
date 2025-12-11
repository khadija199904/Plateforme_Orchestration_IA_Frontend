import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

const Login = ({onSwitch}) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const [error,setError] = useState("")
    const [success, setSuccess] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        setSuccess("");
        

         const payload = { username, password };

        try {

           const response = await fetch('http://127.0.0.1:8000/auth/login', {
           method: "POST",
           headers: {
        'Content-Type': 'application/json',
      },
           body: JSON.stringify(payload),
    });
        const result = await response.json()
        console.log(result)

        if (response.ok){
         setSuccess("Connexion réussie ! Redirection...");
         localStorage.setItem('token', result.access_token);
         
          navigate('/analyse'); 

         
        } else {
         setError(result.detail || "Identifiants incorrects");

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

    {error && <p style={{color: 'red'}}>{error}</p>}
    {success && <p style={{color: 'green'}}>{success}</p>}


    </div>

   
  )
}

export default Login