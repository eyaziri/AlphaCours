import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service'; // Update the import path

@Component({
  selector: 'app-teacher-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './teacher-registration.component.html',
  styleUrls: ['./teacher-registration.component.scss'],
})
export class TeacherRegistrationComponent {
  @Output() registrationCompleted = new EventEmitter<void>();
  teacher = {
    nom: '',
    prenom: '',
    email: '',
    specialite: '',
    password: '',
    role: 'teacher', // Add the role field
  };
  teacherForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.teacherForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      specialite: [''],
      motDePasse: [''],
      confirmerMotDePasse: [''],
    });
  }

  onSubmit() {
    this.authService.register(this.teacher).subscribe({
      next: (response: any) => {
        console.log('Teacher registered successfully', response);
        this.router.navigate(['/loginprof']); // Redirect to teacher login
        this.registrationCompleted.emit();
      },
      error: (error: any) => {
        console.error('Error registering teacher', error);
        alert('Erreur lors de l\'inscription. Veuillez réessayer.'); // Show error message
      },
    });
  }
}