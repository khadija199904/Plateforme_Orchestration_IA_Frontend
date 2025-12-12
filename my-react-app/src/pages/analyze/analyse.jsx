import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './analyse.css';
import LogoutButton from '../../components/LogoutButton';
import About from '../../components/About';

const Analyse = () => {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState(null); // Changé à null par défaut
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const handelanalysis = async (e) => {
    e.preventDefault();
    setError(null);

    if (!text.trim()) {
      setError("Le texte est vide");
      return;
    }

    setLoading(true);
    const token = localStorage.getItem('token');

    if (!token) {
      setError("Non connecté.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/analyse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify({ "text": text })
      });

      const result = await response.json();
      if (response.ok) {
        setAnalysis(result);
        setError("");
      } else {
        setError(result.detail || "Erreur requête");
      }
    } catch (error) {
      setError("Erreur : " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-layout">
      
      {/* --- BARRE DU HAUT --- */}
      <header className="dashboard-header">
        <div className="header-left">
          <h2>DASHBOARD</h2>
        </div>
        <div className="header-right">
          <button className="btn-about" onClick={() => setShowAbout(true)}>
            <FaInfoCircle className="icon" /> À propos
          </button>
        </div>
      </header>

      {/* --- CONTENU PRINCIPAL --- */}
      <main className="dashboard-main">
        
        {/* ZONE GAUCHE : INPUT */}
        <section className="panel left-panel">
          <div className="panel-header">
            <h3>Entrée de texte</h3>
            <span className="badge">Analyseur IA</span>
          </div>
          
          <div className="input-wrapper">
            <textarea
              className="main-textarea"
              placeholder="Entrez ou collez votre texte ici..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="action-area">
            {error && <div className="error-msg">⚠️ {error}</div>}
            <button 
              className="btn-analyze" 
              onClick={handelanalysis} 
              disabled={loading}
            >
              {loading ? 'Traitement en cours...' : 'Lancer l\'analyse'}
            </button>
          </div>
        </section>

        {/* ZONE DROITE : RÉSULTATS */}
        <section className="panel right-panel">
          <div className="panel-header">
            <h3>Résultats de l'analyse</h3>
          </div>

          <div className="results-container">
            {!analysis && !loading && (
              <div className="empty-state">
                <p>En attente de contenu à analyser...</p>
              </div>
            )}

            {loading && <div className="loader-spinner"></div>}

            {analysis && !loading && (
              <div className="results-content">
                
                {/* Bloc 1 : Grand Résumé */}
                <div className="result-block resume-block">
                  <h4>Résumé Généré</h4>
                  <div className="resume-text">
                    {analysis.resume || "Aucun résumé disponible."}
                  </div>
                </div>

                {/* Bloc 2 : Les 3 métriques alignées sur la même ligne */}
                <div className="metrics-grid">
                  
                  {/* Catégorie */}
                  <div className="metric-card category">
                    <span className="metric-label">Catégorie</span>
                    <span className="metric-value">{analysis.categorie || "N/A"}</span>
                  </div>

                  {/* Score */}
                  <div className="metric-card score">
                    <span className="metric-label">Score</span>
                    <span className="metric-value score-val">{analysis.score || "0"}</span>
                  </div>

                  {/* Ton */}
                  <div className="metric-card tone">
                    <span className="metric-label">Ton</span>
                    <span className="metric-value">{analysis.ton || "Neutre"}</span>
                  </div>

                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* BOUTON DECONNEXION (FIXE EN BAS À DROITE) */}
      <div className="fixed-logout">
        <LogoutButton />
      </div>

      {/* MODAL ABOUT */}
      {showAbout && (
        <div className="modal-overlay" onClick={() => setShowAbout(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-modal" onClick={() => setShowAbout(false)}>✖</button>
            <About />
          </div>
        </div>
      )}

    </div>
  );
};

export default Analyse;