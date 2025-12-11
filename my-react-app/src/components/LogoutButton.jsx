import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaPowerOff } from 'react-icons/fa';


const LogoutButton = ({ className }) => {

    const navigate = useNavigate();
     // Fonction de Déconnexion 
    const handleLogout = () => {
    
    localStorage.removeItem('token');
    
    navigate('/'); 
  };

   return (
    <button 
      className={`btn-control ${className || ''}`} 
      onClick={handleLogout}
    >
      <FaPowerOff style={{ marginRight: '8px' }} />  Déconnexion
    </button>
  );
};

export default LogoutButton;