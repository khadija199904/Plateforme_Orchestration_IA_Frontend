import React, { useState } from 'react'


const Register = ({onSwitch}) => {
    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const [error,setError] = useState("")
    const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
     setError("");
     setSuccess("");


  const payload = {email,username,password}
   console.log("Payload envoyé :", payload)

  try  {
     const response = await fetch ('http://127.0.0.1:8000/auth/register',{
        method : 'POST',
        headers :{'Content-Type': 'application/json',},
        body : JSON.stringify(payload)
     });

       const result = await response.json()
       

     if (response.ok){
         setSuccess("Compte créé avec succès ! Vous pouvez maintenant vous connecter.");
         console.log("Succès:", result);


          setEmail("");
          setUsername("");
          setPassword(""); 
         } else { 
      
      setError(result.detail || "Une erreur est survenue lors de l'inscription.")
      console.log("Erreur backend:", result.detail)
      }

    }catch (err) {
        // setError(err.message)
         setError(err.detail || "Une erreur est survenue lors de l'inscription.");
  
      } finally {
  
      }




  }



  return (
    <div className='box-register'>
    <h2>Créé votre compte</h2>
   
    <form  onSubmit={handleSubmit} >
      <div>
       <input type="email" id="email" 
           placeholder='EX:khadija@live.fr'
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           />
    </div>  
      
    <div>
     <input type="text" id="username" 
           placeholder='username'
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           />
      </div>
    
    <div>
   <input type="password" id="password" 
           placeholder='*********'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           />
    </div>
    
    <div>
        <button type='submit'>S'inscrire</button>
    </div>
    <p>
        Déjà un compte ?{" "}
        <span className='switch' onClick={onSwitch} style={{ color: "blue", cursor: "pointer" }}>
          Se connecter
        </span>
      </p>

    </form>
  
    {success && <p style={{ color: 'green', fontWeight: 'bold' }}>{success}</p>}
    {error && <p style={{ color: 'red' }}>{error}</p>}
    
    </div>
  )
}

export default Register