import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginprof',
  standalone: true,
  imports: [RouterModule],

  templateUrl: './loginprof.component.html',
  styleUrl: './loginprof.component.scss'
})
export class LoginprofComponent {

    @Output() showTeacherRegister = new EventEmitter<void>();
    @Output() showStudentRegister = new EventEmitter<void>();
    @Output() showteacherProfile = new EventEmitter<void>();
    @Output() loggedIn = new EventEmitter<void>();
  
    role: string = ''; 
    showTeacherForm: boolean = false; 
    showStudentForm: boolean = false; 
    showMessagesPage: boolean = false;
    showClassCreator: boolean = false;
    showHomeContent: boolean = false;
  
    constructor() {}
  
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
      this.role = selectElement.value; 
    }

    onDisplayTeacherProfile() {
      this.loggedIn.emit(); // Émettre l'événement quand l'utilisateur se connecte
    }
    
}
