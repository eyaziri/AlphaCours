import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  task1: string = '';
  task2: string = '';
  task3: string = '';

  // Fonction pour mettre à jour la tâche
  updateTask(taskNumber: number, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (taskNumber === 1) {
      this.task1 = inputElement.value;
    } else if (taskNumber === 2) {
      this.task2 = inputElement.value;
    } else if (taskNumber === 3) {
      this.task3 = inputElement.value;
    }
  }
  
}
