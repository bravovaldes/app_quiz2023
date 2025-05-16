import React,{ useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate } from 'react-router-dom';
export default function Modal({selected,setselected}){
  const history = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const options = ['Capitales', 'Musique', 'Jeux videos','Films','Football'];

  const handleOptionClick = (option) => {
    setselected(option);
    setIsActive(false);
    // Rediriger l'utilisateur vers la page spécifique en fonction de l'option sélectionnée
    history(`/${option.toLowerCase()}`);
  };
  
    return (
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e)=>setIsActive(!isActive)}>{selected}<FontAwesomeIcon icon={isActive ? "fa-solid fa-caret-up" :"fa-solid fa-caret-down"} /></div>
          {isActive && (
          <div className="dropdown-content">
            {options.map((option)=>(
               <div
               key={option}
               onClick={() => handleOptionClick(option)}
              className="dropdown-item">{option}</div>
             
           ) )}
           </div>
            )}
            
      </div>
    );
  };
