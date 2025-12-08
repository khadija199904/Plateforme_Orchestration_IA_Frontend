import React, { useState } from 'react'

const Register = ({onSwitch}) => {
    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const[isRegister,setIsRegister] = useState(true)

  const handlSubmit = async () => {
     
  const payload = {email,username,password}

  try  {
     const response = await fetch ('http://127.0.0.1:8000/register',{
        method : 'POST',
        headers :{'Content-Type': 'application/json',},
        body : JSON.stringify(payload)
     });
       result = response.json()
       console.log(result)

     if (!response.ok){
      const err = await response.json(
        setError(err)
      )
     }
     
    

  } catch (err) {
        setError(err.message)
  
      } finally {
  
      }




  }



  return (
    <div>
    <h2>Créé votre compte</h2>
    <form  onSubmit={handlSubmit} >
      <div>
       <input type="email" id="email" 
           placeholder='EX:khadija@live.fr'
           value={email}
           onChange={e => setEmail(e.target.value)}
           />
    </div>  
      
    <div>
     <input type="username" id="username" 
           placeholder='username'
           value={username}
           onChange={e => setUsername(e.target.value)}
           />
      </div>
    
    <div>
   <input type="password" id="password" 
           placeholder='*********'
           value={password}
           onChange={e => setPassword(e.target.value)}
           />
    </div>
    
    <div>
        <button type='submit'>S'inscrire</button>
    </div>
    <p>
        Déjà un compte ?{" "}
        <span onClick={onSwitch} style={{ color: "blue", cursor: "pointer" }}>
          Se connecter
        </span>
      </p>

    </form>
  
    
    
    </div>
  )
}

export default Register