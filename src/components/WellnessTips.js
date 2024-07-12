// src/components/WellnessTips.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css'; // Ajuste o caminho aqui

const WellnessTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await axios.get('http://localhost:5000/wellness-tips');
        setTips(response.data);
      } catch (error) {
        console.error('Erro ao buscar dicas de bem-estar:', error);
      }
    };
    fetchTips();
  }, []);

  return (
    <div className="wellness-tips">
      <h1>Dicas de Bem-Estar</h1>
      <ul>
        {tips.map((tip) => (
          <li key={tip.id}>{tip.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default WellnessTips;
