// src/components/TodoList.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import type { Todo } from '../types'
import { TodoList } from './TodoList'

const noop = vi.fn() // callback vacío reutilizable

describe('TodoList — renderizado condicional', () => {
  it('muestra el estado vacío cuando no hay tareas', () => {
    render(<TodoList todos={[]} onToggle={noop} onDelete={noop} />)

    expect(screen.getByText('No hay tareas todavía')).toBeInTheDocument()
    // no debe existir ninguna lista
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })
})
 it('muestra la lista cuando hay tareas y oculta el estado vacío', () => {
    const todos: Todo[] = [{ id: '1', text: 'Tarea uno', completed: false }]
    render(<TodoList todos={todos} onToggle={noop} onDelete={noop} />)

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.queryByText(/no hay tareas/i)).not.toBeInTheDocument()
  }) 



  