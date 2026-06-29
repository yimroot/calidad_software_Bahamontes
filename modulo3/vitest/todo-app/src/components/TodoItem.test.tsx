// src/components/TodoItem.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types';

describe('TodoItem', () => {
  it('debería mostrar el texto de la tarea', () => {
    // Arrange: preparamos una tarea de ejemplo y funciones vacías.
    const todo: Todo = { id: '1', text: 'Comprar pan', completed: false };

    // Act: renderizamos el componente (aquí el "acto" es el propio render).
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);

    // Assert: el texto de la tarea debe estar en el documento.
    expect(screen.getByText('Comprar pan')).toBeInTheDocument();
  });
});