// src/components/MeditationExercises.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css'; // Ajuste o caminho aqui

const MeditationExercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('http://localhost:5000/meditation-exercises');
        setExercises(response.data);
      } catch (error) {
        console.error('Erro ao buscar exercícios de meditação:', error);
      }
    };
    fetchExercises();
  }, []);

  return (
    <div className="meditation-exercises">
      <h1>Exercícios de Meditação</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MeditationExercises;


