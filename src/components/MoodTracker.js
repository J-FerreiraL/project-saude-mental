// src/components/MoodTracker.js

import React, { useState } from 'react';

const MoodTracker = () => {
  const [mood, setMood] = useState(''); // Estado para armazenar o humor selecionado

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleSaveMood = () => {
    // Implemente a lógica para salvar o humor no backend
    console.log('Humor registrado:', mood);
    // Limpe o estado depois de salvar, se necessário
    setMood('');
  };

  return (
    <div>
      <h2>Registro de Humor Diário</h2>
      <label>Selecione seu humor hoje:</label>
      <select value={mood} onChange={handleMoodChange}>
        <option value="">Selecione...</option>
        <option value="😄">Muito bem</option>
        <option value="😊">Bem</option>
        <option value="😐">Normal</option>
        <option value="😞">Mal</option>
        <option value="😢">Muito mal</option>
      </select>
      <button onClick={handleSaveMood}>Salvar</button>
    </div>
  );
};

export default MoodTracker;
