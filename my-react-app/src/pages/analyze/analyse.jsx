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
    const token = localStorage.getItem('token'); 

    if (!token) {
      setError("Non connecté.");
      setLoading(false);
      return;
    }
    


   try {
    
    const response = await fetch (`http://127.0.0.1:8000/analyse`,{
          method : 'POST',
          headers : {
            'Content-Type': 'application/json',
           'token': token 
          },
          body :JSON.stringify({"text" : text})
    });


    if (!response.ok){
      const err = await response.json()
      console.log("Erreur backend:", err)
      throw new Error(JSON.stringify(err.detail) || 'Erreur requête');
      
      }

      
    const result = await response.json()
    setAnalysis(result || "Analysis ok")
    console.log(result)

        } catch (error) {
     console.error("Détails de l'erreur :", error);
     setError("Erreur : " + error.message);
         } finally {
      setLoading(false);
          }
        };

  


  return (
        <div className='analyse-container'>
            
            {/* --- PARTIE GAUCHE : INPUT --- */}
            <div className='left-panel'>
                <h2>Votre Texte</h2>
                <textarea
                    className='text-input'
                    placeholder='Entrez votre texte ici pour analyse...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                
                {error && <div className="alert-error">⚠️ {error}</div>}
                
                <button 
                    className='analyze-btn' 
                    onClick={handelanalysis} 
                    disabled={loading}
                >
                    {loading ? 'Analyse en cours...' : 'Analyser le texte'}
                </button>
            </div>

            {/* --- PARTIE DROITE : RÉSULTATS --- */}
            <div className='right-panel'>
                <h2>Résultats</h2>

                {!analysis && !loading && <div className="placeholder-text">Les résultats s'afficheront ici.</div>}
                
                {loading && <div className="loader">Chargement...</div>}

                {analysis && !loading && (
                    <div className="results-wrapper">
                        
                        {/* Zone 1 : Grand Résumé */}
                        <div className="resume-box">
                            <h3>Résumé Généré</h3>
                            <p>{analysis.resume || "Aucun résumé disponible."}</p>
                        </div>

                        {/* Zone 2 : Les 3 métriques alignées */}
                        <div className="metrics-row">
                            
                            <div className="metric-card category">
                                <h4>Catégorie</h4>
                                <span className='value'>{analysis.categorie}</span>
                            </div>

                            <div className="metric-card score">
                                <h4>Score</h4>
                                <span className='value'>{analysis.score}</span>
                            </div>

                            <div className="metric-card tone">
                                <h4>Ton</h4>
                                <span className='value'>{analysis.ton}</span>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Analyse