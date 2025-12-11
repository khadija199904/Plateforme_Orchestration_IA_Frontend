import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-card">
      {/* En-tête avec contexte institutionnel */}
      <div className="promo-badge">
         Formation Développeur IA <strong>(TalAIt)</strong> | Simplon Maghreb & JobInTech
      </div>

      <div className="about-header">
        <h2 className="about-title">Plateforme d'Orchestration IA</h2>
        <p className="subtitle">Classification Zero-Shot & Synthèse Générative Contextuelle</p>
      </div>
      
      {/* Section 1 :  besoin métier */}
      <section className="about-section">
        <h3>Contexte & Problématique</h3>
        <p>
          Ce projet répond à un défi majeur pour les agences de <strong>Media Monitoring</strong> : l'incapacité de traiter manuellement le volume croissant d'articles de presse quotidiens.
          <br /><br />
          L'objectif était de concevoir une architecture capable d'automatiser l'analyse sémantique, la classification et la synthèse de contenus textuels via un pipeline d'Intelligence Artificielle hybride.
        </p>
      </section>

      {/* Section 2 : Architecture Technique */}
      <section className="about-section">
        <h3>Architecture & Réalisations Techniques</h3>
        <ul className="skills-list">
          <li>
            <strong>Orchestration Backend (Python) :</strong> Développement d'une API robuste assurant l'interopérabilité entre plusieurs services IA (Chainage des appels, gestion des timeouts et agrégation des résultats JSON).
          </li>
          <li>
            <strong>Pipeline NLP Avancé :</strong> 
            <ul>
                <li><strong>Classification :</strong> Implémentation du modèle <em>Zero-Shot</em> (<code>facebook/bart-large-mnli</code>) via Hugging Face pour la catégorisation automatique.</li>
                <li><strong>Génération (GenAI) :</strong> Utilisation de Google Gemini avec un <em>Prompt Engineering</em> contextuel pour la synthèse et l'analyse de sentiment (Positif/Neutre/Négatif).</li>
            </ul>
          </li>
          <li>
            <strong>Sécurité & Authentification (JWT):</strong> Mise en place d'un protocole sécurisé via <strong>JWT</strong> (JSON Web Tokens) et hachage des mots de passe (Bcrypt) pour la protection des endpoints.
          </li>
          <li>
            <strong>Qualité & DevOps :</strong> Environnement de développement conteneurisé sous <strong>Docker</strong> et validation du code via des tests unitaires (Mocking complet des APIs tierces).
          </li>
        </ul>
      </section>

      {/* Section 3 : Stack */}
      <section className="about-section">
        <h3>Stack Technologique</h3>
        <div className="tech-badges">
          <span className="badge react">React.js</span>
          <span className="badge python">Python (FastAPI)</span>
          <span className="badge db">PostgreSQL</span>
          <span className="badge ai">Hugging Face</span>
          <span className="badge gemini">Google Gemini</span>
          <span className="badge JWT">JWT</span>
          <span className="badge docker">Docker</span>
        </div>
      </section>

      {/* Footer avec liens dynamiques */}
      <div className="about-footer">
        <p className="signature">
          Développé par <strong>Khadija Elabbioui</strong>
        </p>
        
        <div className="about-links">
          <a href="https://www.linkedin.com/in/khadija-elabbioui-308499216/" target="_blank" rel="noopener noreferrer" className="link-btn linkedin">
             LinkedIn
          </a>
          <a href="https://github.com/khadija199904/Plateforme_Orchestration_IA_Backend" target="_blank" rel="noopener noreferrer" className="link-btn github">
             Repo Backend
          </a>
          <a href="https://github.com/khadija199904/Plateforme_Orchestration_IA_Frontend" target="_blank" rel="noopener noreferrer" className="link-btn github">
             Repo Frontend
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;