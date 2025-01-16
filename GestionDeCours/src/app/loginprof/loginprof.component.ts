import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service'; // Update the import path
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginprof',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './loginprof.component.html',
  styleUrl: './loginprof.component.scss',
})
export class LoginprofComponent {
  credentials = {
    email: '',
    password: '',
    role: 'teacher', // Default role for teacher login
  };

  @Output() showTeacherRegister = new EventEmitter<void>();
  @Output() showStudentRegister = new EventEmitter<void>();
  @Output() showteacherProfile = new EventEmitter<void>();
  @Output() loggedIn = new EventEmitter<void>();

  showTeacherForm: boolean = false;
  showStudentForm: boolean = false;
  showMessagesPage: boolean = false;
  showClassCreator: boolean = false;
  showHomeContent: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('Form submitted', this.credentials);

    // Call the login method from AuthService
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token); // Store the token
        localStorage.setItem('role', response.role); // Store the role

        // Redirect based on role
        if (response.role === 'teacher') {
          this.router.navigate(['/profil-prof']);
        }

        this.loggedIn.emit(); // Emit the loggedIn event
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Identifiants incorrects. Veuillez réessayer.'); // Show error message
      },
    });
  }

  onShowTeacherRegister() {
    this.showTeacherRegister.emit();
    this.showTeacherForm = true;
    this.showStudentForm = false;
  }

  onShowStudentRegister() {
    this.showStudentRegister.emit();
    this.showStudentForm = true;
    this.showTeacherForm = false;
  }

  getInputValue(event: Event) {
    const selectElement = event.target as HTMLInputElement;
    this.credentials.role = selectElement.value; // Update the role in credentials
  }
}