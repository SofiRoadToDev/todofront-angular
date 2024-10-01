export interface Todo {
  id?: number;
  nombre: string;
  detalle: string;
  categoria: Categoria;
  imagen?: string;
  isCompleted: boolean;
}

export interface Categoria {
  id?: number;
  nombre: string;
}

export interface User {
  usuario: string;
  contraseña: string;
}
