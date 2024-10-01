import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { TodoService } from './services/todo.service';
import { Categoria, Todo } from './interfaces/Todo';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';

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
    FormsModule,
    LoginFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'todo-frontend';
  todos: Todo[] = [];
  service = inject(TodoService);
  error = null;
  categoryFilter = 0;
  categories: Categoria[] = [];
  hideModal = true;

  ngOnInit(): void {
    this.service.getToDos().subscribe({
      next: (data) => {
        this.todos = data;
      },
      error: (err) => (this.error = err),
    });

    this.service.getCategories().subscribe({
      next: (res) => (this.categories = res),
      error: (err) => (this.error = err),
    });
  }

  filterCategoryChange() {
    if (this.categoryFilter == 0) {
      this.service.getToDos().subscribe((res) => (this.todos = res));
    }
    this.service
      .getTasksByCategoryId(this.categoryFilter)
      .subscribe((res) => (this.todos = res));
  }
  /**filterCategoryChange(event:Event){
    const newValue = (event.target as HTMLInputElement).value
    console.log(this.categoryFilter)
  } */
}
