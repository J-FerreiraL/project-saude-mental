// src/components/DailyMood.js

import React, { useState } from 'react';

const DailyMood = () => {
  const [mood, setMood] = useState('');

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleSave = () => {
    console.log(`Mood saved: ${mood}`);
    // Adicionar lógica para salvar o humor
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="mood">Selecione seu humor hoje:</label>
        <select className="form-control" id="mood" value={mood} onChange={handleMoodChange}>
          <option value="">Selecione...</option>
          <option value="happy">Feliz</option>
          <option value="sad">Triste</option>
          <option value="anxious">Ansioso</option>
          <option value="calm">Calmo</option>
        </select>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSave}>Salvar</button>
    </form>
  );
};

export default DailyMood;


