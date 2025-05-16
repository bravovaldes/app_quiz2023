import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Sections from './components/sections/Sections';
import Navbar from './components/navbar/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faXTwitter, faInstagram,faPlaystation} from '@fortawesome/free-brands-svg-icons';
import { faHeart, faStar,faMagnifyingGlass,faCaretDown,faCaretUp,faChevronDown,faBars,faChevronRight, faClock, faEarthAfrica,faMusic,faPlay,faFutbol,faRotateRight  } from '@fortawesome/free-solid-svg-icons';
import './style/styles.scss'
import './style/responsive.scss'
import Quiz from './components/quiz/Quiz';
import Capitales from './database/Capitales.json'
import CapitalesSup from './database/Capitalespro.json'
import Sport from './database/sport.json'
import SportSup from './database/sport2.json'
import Films from './database/film.json'
import FilmSup from './database/film2.json'
import Musique from './database/musique.json'
import MusiqueSup from './database/musique2.json'
import Jeux from './database/jeuxvideos.json'
import JeuxSup from './database/jeuxvideos2.json'
import Quizsup from './components/quiz/Quizsup';
import QuizPro from './components/quiz/QuizPro';
// Ajoutez les icônes que vous souhaitez utiliser à la bibliothèque
library.add(faHeart, faStar,faMagnifyingGlass, faFacebookF, faXTwitter, faInstagram,faCaretDown,faCaretUp,faChevronDown,faBars,faChevronRight,faClock,faEarthAfrica,faMusic,faPlaystation,faPlay,faFutbol,faRotateRight );


function App() {
     
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={<Sections/>} />
       <Route path="/1" element={<QuizPro/>} />
       <Route path="/question/1" element={<Quiz questionData={Capitales}/>} />
       <Route path="/question/2" element={<Quiz questionData={Musique}/>} />
       <Route path="/question/3" element={<Quiz questionData={Jeux}/>} />
       <Route path="/question/4" element={<Quiz questionData={Films}/>} />
       <Route path="/question/5" element={<Quiz questionData={Sport}/>} />
       <Route path="/question/niveausup1" element={<Quizsup questionData={CapitalesSup}/>} />
       <Route path="/question/niveausup2" element={<Quizsup questionData={MusiqueSup}/>} />
       <Route path="/question/niveausup3" element={<Quizsup questionData={JeuxSup}/>} />
       <Route path="/question/niveausup4" element={<Quizsup questionData={FilmSup}/>} />
       <Route path="/question/niveausup5" element={<Quizsup questionData={SportSup}/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
