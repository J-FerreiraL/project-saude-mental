// src/components/HealthIntegration.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css'; // Ajuste o caminho aqui

const HealthIntegration = () => {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/health-integration');
        setProfessionals(response.data);
      } catch (error) {
        console.error('Erro ao buscar profissionais de saúde:', error);
      }
    };
    fetchProfessionals();
  }, []);

  return (
    <div className="health-integration">
      <h1>Integração com Profissionais de Saúde</h1>
      <ul>
        {professionals.map((professional) => (
          <li key={professional.id}>{professional.name} - {professional.specialty}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthIntegration;

