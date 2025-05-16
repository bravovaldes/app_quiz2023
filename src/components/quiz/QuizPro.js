// src/Quiz.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizPro = () => {
  const [capital, setCapital] = useState('');
  const [displayedCapital, setDisplayedCapital] = useState([]);
  const [letter, setLetter] = useState('');

  useEffect(() => {
    // Charger une nouvelle capitale au chargement du composant
    fetchCapital();
  }, []);

  const fetchCapital = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const randomIndex = Math.floor(Math.random() * response.data.length);
      const randomCapital = response.data[randomIndex].capital[0];
      setCapital(randomCapital.toUpperCase());
      setDisplayedCapital(Array(randomCapital.length).fill(''));
    } catch (error) {
      console.error('Erreur lors du chargement de la capitale', error);
    }
  };

  const handleLetterChange = (event) => {
    const inputLetter = event.target.value.toUpperCase();
    setLetter(inputLetter);
    updateDisplayedCapital(inputLetter);
  };

  const updateDisplayedCapital = (inputLetter) => {
    const newDisplayedCapital = displayedCapital.map((char, index) =>
      capital.charAt(index) === inputLetter || char !== '' ? capital.charAt(index) : ''
    );
    setDisplayedCapital(newDisplayedCapital);
  };

  return (
    <div>
      <h1>Devinez la capitale !</h1>
      <img src={`https://source.unsplash.com/300x200/?${capital}`} alt="Capitale" />
      <div>
        {displayedCapital.map((char, index) => (
          <span key={index}>{char || '_'}</span>
        ))}
      </div>
      <input
        type="text"
        maxLength="1"
        value={letter}
        onChange={handleLetterChange}
        placeholder="Entrez une lettre"
      />
    </div>
  );
};

export default QuizPro;
