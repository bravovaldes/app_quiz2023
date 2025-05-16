import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Aside() {
  const history = useNavigate();
  return (
    <div class="categorie">
          <h1>Explorez Par Categories</h1>
          <ul>
            <li class="lien lien1" onClick={()=>{history(`/question/1`)}}><FontAwesomeIcon icon="fa-solid fa-earth-africa" class="fa-solid " /><span>G</span>eographie</li>
            <li class="lien lien2"  onClick={()=>{history(`/question/2`)}}><FontAwesomeIcon icon="fa-solid fa-music" class="fa-solid" /><span>M</span>usique</li>
            <li class="lien lien3"  onClick={()=>{history(`/question/3`)}}><FontAwesomeIcon icon="fa-brands fa-playstation" class="fa-brands" /><span>J</span>eux Videos</li>
            <li class="lien lien4" onClick={()=>{history(`/question/4`)}}><FontAwesomeIcon icon="fa-solid fa-play" class="fa-solid" /><span>F</span>ilms</li>
            <li class="lien lien5" onClick={()=>{history(`/question/5`)}}><FontAwesomeIcon icon="fa-solid fa-futbol" class="fa-solid" /><span>F</span>ootball</li>
          </ul>
    </div>
  )
}
