// src/components/Dashboard.js

import MoodTracker from './MoodTracker';
import React from 'react';
import DailyMood from './DailyMood';
import WellnessTips from './WellnessTips';
import MeditationExercises from './MeditationExercises';
import HealthIntegration from './HealthIntegration';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Painel</h1>
      <div className="card mb-4">
        <div className="card-header">
          Registro de Humor Diário
        </div>
        <div className="card-body">
          <DailyMood />
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          Dicas de Bem-Estar
        </div>
        <div className="card-body">
          <WellnessTips />
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          Exercícios de Meditação
        </div>
        <div className="card-body">
          <MeditationExercises />
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          Integração com Profissionais de Saúde
        </div>
        <div className="card-body">
          <HealthIntegration />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

