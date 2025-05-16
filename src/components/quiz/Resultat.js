import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../style/Quiz/resultat.scss';
import { useNavigate } from 'react-router-dom'

export default function Resultat({ questionsResultats,scores,NiveauSup}) {
    const history = useNavigate();
    console.log(questionsResultats)
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    const handleButtonClick = () => {
      // Condition pour déterminer le lien en fonction du score
      if (questionsResultats[0].Category === "Capital") {
        history(`/question/niveausup1`);
      } else if (questionsResultats[0].Category === "Musique") {
        history('/question/niveausup2');
      } else if (questionsResultats[0].Category === "Jeuxvideos") {
        history('/question/niveausup3');
      }else if (questionsResultats[0].Category === "Film") {
      history('/question/niveausup4');
    }else if (questionsResultats[0].Category === "Sport") {
      history('/question/niveausup5');
    }
    };
    const Redirection=()=>{
      history(0); 
    };
  return (
    <div className="resultat">
          <button className='failed' disabled={totalScore >= 50} onClick={Redirection}>Recommencer<FontAwesomeIcon icon="fa-solid fa-rotate-right" /></button>

        
        
          
          {NiveauSup && (
            <>
            <button className="suivant" disabled={totalScore < 50} onClick={handleButtonClick}>
            Niveau Suivant<FontAwesomeIcon className='fa-solid' icon="fa-solid fa-chevron-right" />
            <FontAwesomeIcon className='fa-solid' icon="fa-solid fa-chevron-right" />
          </button>
          {totalScore < 50 ? (
            <h3>Vous n'avez pas le niveau pour passer à l'étape suivante</h3>
          ) : (
            <h3 className='vert'>Felicitations Vous pouvez passer à l'étape suivante</h3>
            
          )
          }
          </>
          )
        }
          <div className="haut">
            <p>Réussite: {((scores.filter(score => score === 10).length / scores.length) * 100).toFixed(2)}%</p>
            <p>Note {totalScore}/{scores.length * 10}</p>
          </div>
       
      
      <table className="entete">
        <thead>
          <tr>
            <th>Question</th>
            <th>Réponse</th>
          </tr>
        </thead>
        <tbody>
          {questionsResultats.map((question, index) => (
            <tr key={index}>
              <td>{question.question}</td>
              
              <td className={`${question.resultat? "correct":"incorrect"}`}>{question.resultat ? 'Correcte' : 'Incorrecte'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
