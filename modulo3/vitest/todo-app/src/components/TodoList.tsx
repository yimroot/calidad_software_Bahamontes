// src/components/TodoList.tsx
import type { Todo } from '../types'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  todos: Todo[] // requerida: siempre debe pasarse
  onToggle: (id: string) => void // requerida
  onDelete: (id: string) => void // requerida
  emptyMessage?: string // opcional: con ? puede omitirse
}

export function TodoList({
  todos,
  onToggle,
  onDelete,
  emptyMessage = 'No hay tareas todavía', // valor por defecto para la opcional
}: TodoListProps) {
  if (todos.length === 0) {
    return <p role="status">{emptyMessage}</p>
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // key estable: clave para el reconciliador
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}