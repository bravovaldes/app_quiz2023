import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style/Quiz/Quiz.scss'
import '../../style/Quiz/Quizsup.scss'
import '../../style/Quiz/ProgresBar.scss'
import EnteteImage from '../../assests/img/entete.svg'
import ProgresBar from './ProgresBar';
import Resultat from './Resultat';

  
export default function Quizsup({questionData}) {
   
     
    const history = useNavigate();
     //Etat pour suivre la question actuelle
     const [currentQuestion,setCurrentQuestion]=useState(0)
     const NiveauSup =false;
     //Etat pour suivre la reponse de l'utilisateur 
     const [userAnswer,setUserAnswer]=useState(null)
     //Etat pour suivre le score de l'utilisateur
     const [score,setScore]=useState(0)
     const [btnDisable,setBtndisable]=useState(true) 
     const [ nextQuestion,setNextQuestion]=useState(1)
     const [answerClicked, setAnswerClicked] = useState(false);
     const [fin, setFin] = useState(false);
     const [progress,setProgress]=useState(0);
     const [questionsResultats, setQuestionsResultats] = useState([]);
     console.log(score)
     const [scores, setScores] = useState(Array(questionData.length).fill(null));
     const [timeRemaining, setTimeRemaining] = useState(20);
    useEffect(()=>{
    toast.warn('Bienvenue dans le quiz !', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });},[]
    );
    //  useEffect(() => {
    //     if(score!=0){
    //     // Affichez un toast au moment du montage du composant (première question)
    //     toast.success('Bienvenue dans le quiz !', {
    //       position: 'top-right',
    //       autoClose: 4000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //     });
    // }
    //   }, [score,answerClicked]);
    const handlAnswerClick = (selectedAnswer) => {
       
      
        if (nextQuestion >= questionData.length) {
          history(`/resultat`);
        }
      };
      
      // ...
     
      
const Update = (selectedAnswer) => {
    setUserAnswer(selectedAnswer);
    setBtndisable(false);
    setNextQuestion(currentQuestion + 1);
    const newProgress = (nextQuestion + 1) / questionData.length * 100;
    setProgress(newProgress);
  
    // Utilisez la fonction de rappel pour vous assurer que vous utilisez la valeur la plus récente de l'état
    setCurrentQuestion((prevQuestion) => {
      const currentOption = questionData[prevQuestion].answersOptions.find(
        (option) => option.answerText === selectedAnswer
      );
      const isCorrect = currentOption ? currentOption.isCorrect : false;
      const updatedQuestionData = [...questionsResultats];
      updatedQuestionData[prevQuestion] = { ...questionData[prevQuestion], resultat: isCorrect };
  
      const updatedScores = [...scores];
      updatedScores[prevQuestion] = isCorrect ? 10 : 0;
  
      setScores(updatedScores);
      setQuestionsResultats(updatedQuestionData);
  
      if (isCorrect) {
        setScore(score + 10);
        toast.success('Bonne réponse +10!', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error('Mauvaise réponse !', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
  
      if (nextQuestion > questionData.length) {
        setFin(true);
      }
      setTimeRemaining(20);
      return prevQuestion + 1; // Retourne la nouvelle valeur de la question actuelle
    });
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0 && !fin) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else {
        // Le temps est écoulé, appeler la fonction pour passer à la question suivante
        Update();
      }
    }, 1000);
  
    // Nettoyez le timer lorsque le composant est démonté ou le quiz est terminé
    return () => clearInterval(timer);
  }, [timeRemaining, Update,fin]);
  // ...
  
     const questions =  questionData &&questionData[currentQuestion];
     console.log(questions)
     return (
      <>
        { questionData && questionData.length > 0 && questions ?  (
        <div className='quiz quizsup'>
            {/* <div className='timer'>{`Temps restant: ${timeRemaining} s`}</div> */}

          {/* <h1>{score}</h1> */}
          <div className="app appsup">
            <ProgresBar score={score} progress={progress} timer={timeRemaining}/>
            {/* <img src={EnteteImage} alt="" /> */}
            {/* <h2>MonScore:{score}</h2> */}
            {/* Affichez le numéro de la question actuelle */}
            {/* <h1>Question {currentQuestion + 1}</h1> */}
            
            {/* Affichez le texte de la question actuelle */}
            <p className='questprin questprinsup'>{questions.question}</p>
            
            {/* Affichez les options de réponse sous forme de boutons */}
            <div className='questionPrin questionPrinsup'>
              {questions.answersOptions.map((option, index) => (
                <button
                  className={`question questionsup ${userAnswer === option.answerText ? "selected" : null}`}
                  key={index}
                  onClick={() =>  Update(option.answerText)}
                >
                  <p>{String.fromCharCode(65 + index)}</p>
                  {option.answerText}
                </button>
              ))}
            </div>
           
            <ToastContainer />
          </div>
          <div className="photo photosup">
            <img  src={questions.imageURL1} alt="" />
            <img src={questions.imageURL2} alt="" />
          </div>
        </div>
      ):(
    <div>
      <Resultat  questionsResultats={questionsResultats} scores={scores} NiveauSup={NiveauSup}/>
    </div>)
    }
      
      </>
     );
}    
