import { Component,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-registration',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.scss']
})
export class TeacherRegistrationComponent {
  @Output() registrationCompleted = new EventEmitter<void>();

  teacherForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      specialite: [''],
      motDePasse: [''],
      confirmerMotDePasse: ['']
    });
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      console.log(this.teacherForm.value);
      this.registrationCompleted.emit(); // Émet l'événement
    } else {
      console.error('Formulaire invalide.');
    }
  }
}
