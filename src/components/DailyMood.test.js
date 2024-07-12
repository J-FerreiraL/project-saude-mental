import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DailyMood from './DailyMood';
import { saveMood } from '../services/api';

jest.mock('../services/api');

describe('DailyMood', () => {
  test('renders correctly', () => {
    render(<DailyMood />);
    expect(screen.getByLabelText(/selecione seu humor hoje/i)).toBeInTheDocument();
  });

  test('saves mood', async () => {
    saveMood.mockResolvedValueOnce({ mood: 'happy' });

    render(<DailyMood />);
    fireEvent.change(screen.getByLabelText(/selecione seu humor hoje/i), { target: { value: 'happy' } });
    fireEvent.click(screen.getByText(/salvar/i));

    expect(saveMood).toHaveBeenCalledWith('happy');
    expect(await screen.findByText(/humor salvo com sucesso/i)).toBeInTheDocument();
  });

  test('handles save mood error', async () => {
    saveMood.mockRejectedValueOnce(new Error('Erro ao salvar'));

    render(<DailyMood />);
    fireEvent.change(screen.getByLabelText(/selecione seu humor hoje/i), { target: { value: 'happy' } });
    fireEvent.click(screen.getByText(/salvar/i));

    expect(saveMood).toHaveBeenCalledWith('happy');
    expect(await screen.findByText(/erro ao salvar o humor/i)).toBeInTheDocument();
  });
});
