import React,{ useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate } from 'react-router-dom';

import Modal from './modals';
export default function Navbar() {
  const defaultOption = 'categories';
  // const [selected, setSelected] = useState(
  //   localStorage.getItem('selected') ||  defaultOption
  // );
  const [selected, setSelected] = useState(
     defaultOption
  );
  const [isActive, setIsActive] = useState(false);
  const [isActivedrow, setIsActivedrow] = useState(localStorage.getItem('isActivedrow') === 'true' || false);
  const options = ['Geographie', 'Musique', 'Jeux videos','Films','Football'];
  const icons =["fa-solid fa-earth-africa","fa-solid fa-music","fa-brands fa-playstation","fa-solid fa-play","fa-solid fa-futbol"]
  const [isOpen, setIsOpen]=useState(false);
  const history = useNavigate();

  //fonction pour menu burger
  const BurgerMenu=()=>{
   setIsOpen(!isOpen);
  }
 
  //fonction pour modal
  const handleOptionClick = (option,index) => {
    setSelected(option);
    setIsActivedrow(false);
    localStorage.setItem('selected', option);
    // Rediriger l'utilisateur vers la page spécifique en fonction de l'option sélectionnée
    history(`question/${index+1}`);
  };
  // useEffect(() => {
  //   localStorage.setItem('selected', selected);
  // }, [selected]);
  // useEffect(() => {
  //   if (window.location.pathname === '/' ) {
  //     // Rediriger l'utilisateur vers la page spécifique
  //     setSelected(defaultOption)
  //   }
  // }, []);
 
  return (
    
    <header>
    <div className="titre">
      <h2 onClick={()=>{history('/')}}>?QuizPro</h2>
      <h3 onClick={()=>setIsActivedrow(!isActivedrow)}>{selected}<FontAwesomeIcon className='fa-solid' icon={!isActive ? 'fa-solid  fa-chevron-down' : 'fa-solid fa-caret-down'}/></h3>
      {isActivedrow ? (
        <div className="dropdown-content">
          {options.map((option,index) => (
            <div key={option} onClick={() => handleOptionClick(option,index)} className="dropdown-item">
              <FontAwesomeIcon className='icons' icon={icons[index]} />{option}
            </div>
          ))}
        </div>
      ):''}
    </div>
    
    <ul  className={` ok ${isOpen? 'openprin':''}`}>
      <li className={`burger ${isOpen? 'open':''}`} onClick={BurgerMenu} >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </li>

      <li><FontAwesomeIcon className='fa-solid' icon="fa-solid fa-magnifying-glass" /></li>
      <li><FontAwesomeIcon className='fa-brand' icon="fa-brands  fa-facebook-f" /></li>
      <li><FontAwesomeIcon className='fab' icon="fab fa-instagram" /></li>
      <li><FontAwesomeIcon className='fa-brands' icon="fa-brands fa-x-twitter" /></li>
     
      <a>En</a>
    </ul>
    
  </header>
  );
}

            
            