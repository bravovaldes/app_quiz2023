import React from 'react'
import football from '../../../assests/img/samuel.jpg'
import Musique from '../../../assests/img/musique.jpg'
import Geography from '../../../assests/img/paris.jpg'
import Disney from '../../../assests/img/disney.jpg'
import { useNavigate } from 'react-router-dom'

export default function Populaires() {
  const history = useNavigate();

  return (
    <div class="cadre_principale">
        <h1>Les Plus Populaires</h1>
        <div class="cadre">
          
          <div class="cadre_secondaire musique" onClick={()=>{history(`/question/1`)}}>
            <p>Musique</p>
          </div>
          <div class="cadre_secondaire capital">
            <p>Geographie</p>
          </div>
          <div class="cadre_secondaire serie">
            <p>Films</p>
          </div>
          <div class="cadre_secondaire foot">
            <p>FootBall</p>
          </div>
        </div>
        
    </div>
  )
}
