import { Component,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-creator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './class-creator.component.html',
  styleUrl: './class-creator.component.scss'
})
export class ClassCreatorComponent {
  @Output() registrationCompleted = new EventEmitter<void>();

  classForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.classForm = this.fb.group({
      Titre: [''],
      Spécialité: [''],
      NSalle: [''],
      Enseignant: [''],
      HeureDebut: [''],
      HeureFin: ['']
    });
  }

  onSubmit() {
    if (this.classForm.valid) {
      console.log(this.classForm.value);
      this.registrationCompleted.emit(); // Émet l'événement
    } else {
      console.error('Formulaire invalide.');
    }
  }
}
