import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MoodTracker from './components/MoodTracker';
import DailyMood from './components/DailyMood';
import WellnessTips from './components/WellnessTips';
import MeditationExercises from './components/MeditationExercises';
import HealthIntegration from './components/HealthIntegration';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/mood-tracker" element={<PrivateRoute><MoodTracker /></PrivateRoute>} />
        <Route path="/daily-mood" element={<PrivateRoute><DailyMood /></PrivateRoute>} />
        <Route path="/wellness-tips" element={<PrivateRoute><WellnessTips /></PrivateRoute>} />
        <Route path="/meditation-exercises" element={<PrivateRoute><MeditationExercises /></PrivateRoute>} />
        <Route path="/health-integration" element={<PrivateRoute><HealthIntegration /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
