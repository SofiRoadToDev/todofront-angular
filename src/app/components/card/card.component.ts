import { Component, Input } from '@angular/core';
import { Todo } from '../../interfaces/Todo';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  todo?: Todo;
}
