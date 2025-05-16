import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style/Quiz/Quiz.scss'
import '../../style/Quiz/ProgresBar.scss'
import '../../style/Quiz/ProgresBarsup.scss'
import EnteteImage from '../../assests/img/entete.svg'
import ProgresBar from './ProgresBar';
import Resultat from './Resultat';

  
export default function Quiz({questionData}) {
   
     
    const history = useNavigate();
     //Etat pour suivre la question actuelle
     const [currentQuestion,setCurrentQuestion]=useState(0)
     const NiveauSup =true
     //Etat pour suivre la reponse de l'utilisateur 
     const [userAnswer,setUserAnswer]=useState(null)
     //Etat pour suivre le score de l'utilisateur
     const [score,setScore]=useState(0)
     const [btnDisable,setBtndisable]=useState(true) 
     const [ nextQuestion,setNextquestion]=useState(1)
     const [answerClicked, setAnswerClicked] = useState(false);
     const [fin, setFin] = useState(false);
     const [progress,setProgress]=useState(0);
     const [questionsResultats, setQuestionsResultats] = useState([]);
     console.log(score)
     const [scores, setScores] = useState(Array(questionData.length).fill(null));
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
        setUserAnswer(selectedAnswer);
        setBtndisable(false);
        setNextquestion(currentQuestion + 1);
      
       
      };
      
      const Update = () => {
        const newProgress = (nextQuestion) / questionData.length * 100;
        setCurrentQuestion(nextQuestion);
        setUserAnswer(null);
        setBtndisable(true);
        setAnswerClicked(false);
        setProgress( newProgress);
        const currentOption = questions.answersOptions.find(option => option.answerText === userAnswer);
        const isCorrect = currentOption ? currentOption.isCorrect : false;
        const updatedQuestionData = [...questionData];
        updatedQuestionData[currentQuestion].resultat = isCorrect;
        const updatedScores = [...scores];
        updatedScores[currentQuestion] = isCorrect ? 10 : 0;
       setScores(updatedScores);
        // Mettez à jour le tableau de résultat
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
        }
        else{
          toast.error('Mauvaise réponse !', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      
        if (nextQuestion > questionData.length - 1) {
          setFin(true)
        }
      };
     const questions = questionData[currentQuestion];
   

     console.log(questions)
     return (
      <>
        { !fin ? (
        <div className='quiz'>
          {/* <h1>{score}</h1> */}
          <div className="app">
            <ProgresBar score={score} progress={progress}/>
            {/* <img src={EnteteImage} alt="" /> */}
            {/* <h2>MonScore:{score}</h2> */}
            {/* Affichez le numéro de la question actuelle */}
            {/* <h1>Question {currentQuestion + 1}</h1> */}
            
            {/* Affichez le texte de la question actuelle */}
            <p className='questprin'>{questions.question}</p>
            
            {/* Affichez les options de réponse sous forme de boutons */}
            <div className='questionPrin'>
              {questions.answersOptions.map((option, index) => (
                <button
                  className={`question ${userAnswer === option.answerText ? "selected" : null}`}
                  key={option.id}
                  onClick={() => handlAnswerClick(option.answerText)}
                >
                  <p>{String.fromCharCode(65 + index)}</p>
                  {option.answerText}
                </button>
              ))}
            </div>
            <button disabled={btnDisable} className='suivant' onClick={Update}>
              {`${nextQuestion >= questionData.length ? "Terminer" : "Suivant"}`}
            </button>
            <ToastContainer />
          </div>
          <div className="photo">
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
