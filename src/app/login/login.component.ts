import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [RouterModule],
})
export class LoginComponent {
  @Output() showTeacherRegister = new EventEmitter<void>();
  @Output() showStudentRegister = new EventEmitter<void>();
  @Output() triggerStudentProfileDisplay = new EventEmitter<void>(); // Nouveau nom pour l'événement
  @Output() showStudentProfile = new EventEmitter<void>();
  @Output() loggedIn = new EventEmitter<void>(); 
  
  showTeacherForm: boolean = false; 
  showStudentForm: boolean = false; 
  showMessagesPage: boolean = false;
  showClassCreator: boolean = false;
  showHomeContent: boolean = false;

  constructor () {}

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
  
  onDisplayStudentProfile() {
    this.loggedIn.emit(); // Émettre l'événement quand l'utilisateur se connecte
  }

  }

