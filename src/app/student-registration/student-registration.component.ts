import { Component,EventEmitter, Output  } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss'
})
export class StudentRegistrationComponent {
  @Output() registrationCompleted = new EventEmitter<void>();
  studentForm: FormGroup;

  constructor(private fb: FormBuilder ,private router: Router) {
    this.studentForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      specialite: [''],
      motDePasse: [''],
      confirmerMotDePasse: ['']
    });
  }
  
  onSubmit() {
    if (this.studentForm.valid) {
      console.log(this.studentForm.value);
      this.registrationCompleted.emit(); 
    } else {
      console.error('Formulaire invalide.');
    }
  }
}
