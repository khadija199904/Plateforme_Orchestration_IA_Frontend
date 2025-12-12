# Hybrid-Analyzer Client (Frontend)
![alt text](https://img.shields.io/badge/React-18.x-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![alt text](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![alt text](https://img.shields.io/badge/Axios-HTTP-5A29E4?style=for-the-badge)

![alt text](https://img.shields.io/badge/Docker-Component-2496ED?style=for-the-badge&logo=docker&logoColor=white)
## À propos
Ce repository contient l'interface utilisateur (Frontend) du projet Hybrid-Analyzer. Développée en React.js, elle offre une interface fluide et responsive permettant aux utilisateurs de s'authentifier et d'interagir avec l'API d'analyse de veille média.
L'application gère le cycle de vie complet de l'analyse : de la saisie du texte brut à l'affichage des résultats générés par l'IA (Classification Hugging Face + Synthèse Gemini).

## Fonctionnalités de l'application :

```mermaid 
graph LR
    %% --- CONFIGURATION GLOBALE ---
    User((Utilisateur))

    %% --- 1. AUTHENTIFICATION ---
    subgraph Auth_Zone [1. Authentification]
        direction TB
        Login[Login]
        Reg[Register]
    end

    %% --- 2. DASHBOARD ---
    subgraph Dash_Zone [💻 2. Dashboard Client]
        direction BT
        %% BT (Bas vers Haut) permet de placer la modale 'À Propos' au-dessus du flux
        
        %% Le flux principal
        subgraph Work_Flow [Flux d'Analyse]
            direction LR
            Input[📝 Input Texte] -->|Fetch API| API[🌐 Traitement]
            API -->|JSON| Result[📊 Résultats]
        end

        %% Modale flottante
        Info["ℹ️ Modale 'À Propos'"]
    end

    %% --- RELATIONS ---
    User --> Auth_Zone
    
    %% Connexion directe vers l'Input (Entrée du Dashboard)
    Login & Reg --> Input
    
    %% Le bouton À propos est accessible depuis l'interface
    Input -.->|Bouton Info| Info

    %% --- STYLES ---
    style Auth_Zone fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    style Dash_Zone fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    style Info fill:#e8f5e9,stroke:#2e7d32,stroke-dasharray: 5 5
    style Work_Flow fill:#fff3e0,stroke:#e65100
```

## Stack Technologique
Framework : React.js (Hooks, JSX)
Routing : React Router DOM (Navigation /auth, /analyze)
Client HTTP : Fetch (Intercepteurs pour injecter le Token)
Styling : CSS Modules / Styled-Components (ou Tailwind selon votre implémentation)
Build Tool : Webpack / Vite

##  Architecture & Flux
L'application suit une structure basée sur les composants et communique avec l'API via des requêtes asynchrones.

```mermaid 
graph LR
    User((Utilisateur)) -->|Input| UI[Interface React]
    UI -->|1. Login| Auth[Auth Service]
    Auth -->|2. Store Token| Storage[(LocalStorage)]
    
    UI -->|3. Submit Text| Analyze[Analysis Service]
    Analyze -->|4. Get Token| Storage
    Analyze -->|5. POST Request| API[Backend FastAPI]
    API -->|6. JSON Response| Analyze
    Analyze -->|7. Update State| UI
```
## Installation et Lancement
1. Prérequis
  - Node.js (v16+) et npm installés.
  - Le Backend (FastAPI) doit être lancé (par défaut sur http://localhost:8000).
2.  Lancer le projet avec Docker
 - Ouvrez votre terminal à la racine du projet.
 - Lancez la construction et le démarrage :
 ```bash
 docker-compose up --build
 ```
 3. Accédez à l'application :
      - Frontend : http://localhost:5173
      - Backend Swagger : http://localhost:8000/docs
 4. Connexion à la base PostgreSQL dans Docker : 
   - Accéder au container PostgreSQL :
```bash
   docker-compose exec db psql -U postgres -d Orchestration_db
```
  - Lister les tables existantes :
```bash
   \dt
```
 - Afficher le contenu de la table Users :
```bash
   SELECT * FROM public."Users";
```
- Afficher le contenu de la table analysis_logs :
```bash
   SELECT * FROM public."analysis_logs";
```

## Gestion des Erreurs Frontend
L'interface gère les codes erreurs renvoyés par le backend :
```bash
| Code | Incident (Cause) | Action / Message |
|------|------------------|------------------|
| **401** | Session expirée / non authentifié | Redirection vers `/auth` |
| **422** | Texte vide ou invalide | Alerte : "Texte invalide" |
| **500** | Erreur interne serveur | "Service indisponible, réessayez" |
| **503** | Serveur en surcharge / maintenance | "Service temporairement indisponible" |
```




