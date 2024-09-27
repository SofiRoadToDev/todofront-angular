import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { TodoService } from './services/todo.service';
import { Todo } from './interfaces/Todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CardComponent,
    CardsListComponent,
    ModalComponent,
    ModalFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'todo-frontend';
  todos: Todo[] = [];
  service = inject(TodoService);
  error = null;

  ngOnInit(): void {
    this.service.getToDos().subscribe({
      next: (data) => {
        this.todos = data;
        console.log(this.todos);
      },
      error: (err) => (this.error = err),
    });
  }
}
