import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css',
})
export class ModalFormComponent {
  fb = inject(FormBuilder);
  categorias = ['codigo', 'ejercicio', 'trabajo'];

  todoForm = this.fb.group({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl(''),
    isCompleted: new FormControl(false, Validators.required),
    imagen: new FormControl(''),
  });

  handleSubmit() {
    console.log(this.todoForm.value);
  }
}
