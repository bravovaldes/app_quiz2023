import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProgresBar({score,progress,timer}) {
  return (
    <div className={`test ${timer ? 'testsup' : ''}`}>
        <progress className={`pro ${timer ? 'prosup' : ''}`} value={progress} max="100"></progress>
        <div className={`score ${timer ? 'scoresup' : ''}`}>
            <p>score</p>
            <h1>{score}</h1>
        </div>
        {timer &&
        <div className="timer">
            <p className='temps'><FontAwesomeIcon icon="fa-solid fa-clock" /></p>
            <p>{timer}s</p>
        </div>
       }
        
    </div>
  )
}
