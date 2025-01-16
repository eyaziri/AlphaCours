import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarTeacherComponent } from "../sidebar-teacher/sidebar-teacher.component";
import { HeaderComponent } from "../header/header.component";
import { PersonComponent } from "../person/person.component";
import { ChatwindowComponent } from "../chatwindow/chatwindow.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { ScheduleTeacherComponent } from "../schedule-teacher/schedule-teacher.component";
import { ClassCreatorComponent } from "../class-creator/class-creator.component";
import { DocumentComponent } from "../document/document.component";
import { DevoirrenduComponent } from "../devoirrendu/devoirrendu.component";
import { CaldprofComponent } from "../caldprof/caldprof.component";
import { ClassesComponent } from "../classes/classes.component";

@Component({
  selector: 'app-profil-prof',
  standalone: true,
  imports: [CommonModule, SidebarTeacherComponent, HeaderComponent, PersonComponent, ChatwindowComponent, ScheduleTeacherComponent, ClassCreatorComponent, DocumentComponent, DevoirrenduComponent, ClassesComponent, CalendarComponent],
  templateUrl: './profil-prof.component.html',
  styleUrl: './profil-prof.component.scss'
})
export class ProfilProfComponent {
  @Output() returnToApp: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  
  showClassCreator: boolean = false;
  showHomeSection: boolean = true; // Par défaut, la section "Accueil" est affichée
  showMessagesPage: boolean = false;
 
  showEmploisPage: boolean = false;
  showDocPage: boolean = false;
  showDevPage: boolean = false;

  onClickDev() {
    this.resetSections();
    this.showDevPage = true; // Afficher la page des messages
  }


  onClickDoc() {
    this.resetSections();
    this.showDocPage = true; // Afficher la page des messages
  }


  onClickEmplois() {
    this.resetSections();
    this.showEmploisPage = true; // Afficher la page des messages
  }

  

  
  showHome() {
    this.resetSections();
    this.showHomeSection = true; // Afficher la section Accueil
  }

  toggleSchedule() {
    this.resetSections();
    this.showClassCreator = true; // Afficher la section "Créer un cours"
  }
  
  onClickMessages() {
    this.resetSections();
    this.showMessagesPage = true; // Afficher la page des messages
  }

  onClickCreateCourse() {
    this.resetSections();
    this.showClassCreator = true;
  }
  
  onClickLogout() {
    this.logout();
  }
  

  onToggleClassCreator() {
    this.resetSections(); // Réinitialise les autres sections
    this.showClassCreator = true; // Affiche la section Création de cours
  }

  logout() {
    this.returnToApp.emit(true); // Indique qu'on doit revenir à l'écran principal
  }

  
  getRoleFromUser(): string {
    return 'etudiant'; 
  }

  private resetSections() {
    this.showHomeSection = false;
    this.showMessagesPage = false;
    this.showClassCreator = false;
    this.showEmploisPage = false;
    this.showDocPage = false;
    this.showDevPage = false;
  }
  
  navigateToMessages() {
    this.showMessagesPage = true;  
  }


  toggleMessagesPage() {
    this.showMessagesPage = !this.showMessagesPage;
  }

  
}



