import React, { useState } from 'react'
import './analyse.css'

const Analyse = () => {


    const [text,setText] = useState("")
    const[analysis,setAnalysis] = useState("")

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handelanalysis = async(e) => {
      e.preventDefault();
      setError(null);
      

      if (!text.trim()) {
        setError("Le texte est vide")
        return
      } else { console.log("le texte envoyé :", text);}
      

    setLoading(true);
    


   try {
    
    const response = await fetch (`http://127.0.0.1:8000/analyse`,{
          method : 'POST',
          headers : {
            'Content-Type': 'application/json',
          //  'token': token 
          },
          body :JSON.stringify({"text" : text})
    });
    const result = await response.json()
    setAnalysis(result)
    console.log(result)
    if (!response.ok){
      const err = await response.json()
      console.log("Erreur backend:", err)
      }
} catch (error) {
     console.error("Détails de l'erreur :", error);
} finally {
      setLoading(false);
    }

    }



  return (
    <div className='page'>
     
      <div action="analyse">
        <h2 >Text</h2>
        <textarea 
        className = 'box-text'
        type="text" 
        placeholder='Entrer votre text ici.....' 
        value={text}
        onChange={(e)=> setText(e.target.value)} />
      </div>
      <button type="submit" 
              onClick={handelanalysis} 
              disabled={loading}
         >
        {loading ? 'Analyse en cours...' : 'Analyser le texte'}
        </button>

        {error && <div className="alert-error">⚠️ {error}</div>}

        <div>
        <span>Resultat de l'analyse :</span>
        {analysis && !loading && (
        <div className="result">
        <p>Catégorie : {analysis.categorie}</p>
      <p>Score : {analysis.score}</p>
      <p>Résumé : {analysis.resume}</p>
      <p>Ton : {analysis.ton}</p>
        </div>
      )}
        


      </div>
      
    
    </div>
  )
}

export default Analyse