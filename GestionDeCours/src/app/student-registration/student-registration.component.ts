import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Update the import path
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss'],
})
export class StudentRegistrationComponent {
  @Output() registrationCompleted = new EventEmitter<void>();
  student = {
    nom: '',
    prenom: '',
    email: '',
    specialite: '',
    password: '',
    role: 'student', // Add the role field
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('Form submitted', this.student);
    this.authService.register(this.student).subscribe({
      next: (response: any) => {
        console.log('Student registered successfully', response);
        this.router.navigate(['/login']); // Redirect to student login
        this.registrationCompleted.emit();
      },
      error: (error: any) => {
        console.error('Error registering student', error);
        alert('Erreur lors de l\'inscription. Veuillez réessayer.'); // Show error message
      },
    });
  }
}