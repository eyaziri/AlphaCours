import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { ChatwindowComponent } from "../chatwindow/chatwindow.component";
import { PersonComponent } from "../person/person.component";
import { ScheduleComponent } from "../schedule/schedule.component";
@Component({
  selector: 'app-profil-etudiant',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, CalendarComponent, TodoListComponent, ChatwindowComponent, PersonComponent, ScheduleComponent],
  templateUrl: './profil-etudiant.component.html',
  styleUrl: './profil-etudiant.component.scss'
})
export class ProfilEtudiantComponent {

  @Output() returnToApp: EventEmitter<boolean> = new EventEmitter<boolean>();

   title = 'GestionDeCours';
  
    
    showHomeSection: boolean = true;
    showSchedule: boolean = false;
    showMessagesPage: boolean = false;
    showTeacherProfile: boolean= false;;
    showStudentProfile: boolean= false;;
    showLogin: boolean= false;;
    
  
    showHome() {
      this.resetSections();
      this.showHomeSection = true;
    }
  
  
    toggleSchedule() {
      this.resetSections();
      this.showSchedule = true;
    }
    
  
    logout() {
      this.returnToApp.emit(true); // Indique qu'on doit revenir à l'écran principal
    }

    getRoleFromUser(): string {
      return 'etudiant'; 
    }
  
    private resetSections() {
      this.showMessagesPage = false;
      this.showSchedule = false;
      this.showHomeSection = false;
    }
    
    
    exitToHome() {
      this.returnToApp.emit(true);  // Envoie l'événement à AppComponent pour revenir à l'accueil
    }
    
    navigateToMessages() {
      this.resetSections();
      this.showMessagesPage = true;
    }
    
  
    toggleMessagesPage() {
      this.showMessagesPage = !this.showMessagesPage;
    }
  
    onClickMessages() {
      this.showMessagesPage = true;  
    }
    navigateToHome() {
      this.resetSections();
      this.showHomeSection = true;
    }
}
