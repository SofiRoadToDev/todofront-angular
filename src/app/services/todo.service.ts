import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Categoria, Todo } from '../interfaces/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  baseUrl = 'http://localhost:8000/api/v1';

  getToDos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  crearTodo(todo: Todo) {
    return this.http.post(this.baseUrl, todo);
  }

  borrarTodo(id: number) {
    return this.http
      .delete(`this.baseUrl/${id}`)
      .pipe(catchError(this.handleError));
  }

  actualizarTodo(todo: Todo) {
    return this.http.put(this.baseUrl, todo);
  }

  getCategories():Observable<Categoria[]>{
      return this.http.get<Categoria[]>(this.baseUrl+"/categorias")
        .pipe(catchError(this.handleError));
  }

  getTasksByCategoryId(id:number):Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl+"/filtro-categoria", {params: {id}});
  }

  handleError(error: HttpErrorResponse) {
    let errorMsg = 'Error';
    if (error.status === 0) {
      errorMsg = `Network Error: ${error.error}`;
    } else {
      errorMsg = `Backend response status: ${error.status} msg: ${error.error}`;
    }
    return throwError(() => new Error('Ocurrio un error: ' + errorMsg));
  }
}
