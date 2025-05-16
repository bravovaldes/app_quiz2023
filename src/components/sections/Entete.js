import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Allquiz from '../../assests/img/allquiz.jpg'
export default function Entete() {
  const a=2;
  console.log(a)
  return (
    <div className="allquiz">
      <img src={Allquiz} alt="allquiz"/>
      <p>Vous cherchez à enrichir votre culture générale et à tester vos connaissances tout en vous amusant?
        Que vous soyez passionné d'histoire, de géographie, de musique ou de cinéma, nous avons le quiz parfait pour vous.
      </p>
      <button className="btn-quiz">Voir tous les quiz<FontAwesomeIcon icon="fa-solid fa-chevron-right"></FontAwesomeIcon></button>
    </div>
  )
}
