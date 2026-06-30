import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AddTodoForm } from './AddTodoForm';

describe('Componente AddTodoForm', () => {
  
  it('debería empezar con el input vacío', () => {
    // Usamos una función simulada (mock) vacía de Vitest para la prop obligatoria
    render(<AddTodoForm onAdd={vi.fn()} />);
    
    // toHaveValue('') confirma que el campo arranca vacío
    expect(screen.getByLabelText('Nueva tarea')).toHaveValue('');
  });

  it('debería exponer el placeholder esperado (toHaveAttribute)', () => {
    render(<AddTodoForm onAdd={vi.fn()} />);
    
    // Comprobamos un atributo concreto con su valor
    expect(screen.getByLabelText('Nueva tarea')).toHaveAttribute(
      'placeholder',
      '¿Qué hay que hacer?'
    );
  });

  it('el input debería ser visible', () => {
    render(<AddTodoForm onAdd={vi.fn()} />);
    
    expect(screen.getByLabelText('Nueva tarea')).toBeVisible();
  });

});