// src/types.ts
// Tipos compartidos por toda la aplicación.

// Una tarea individual.
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// Filtros disponibles para la lista.
export type Filter = 'all' | 'active' | 'completed';

// Usuario autenticado (login simulado).
export interface User {
  id: string;
  name: string;
}

// src/types.ts
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}