import { Component, AfterViewInit, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerInvestmentComponent } from "./career-investment/career-investment.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { LoginComponent } from "./login/login.component";
import { TeacherRegistrationComponent } from "./teacher-registration/teacher-registration.component";
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AuthService } from './auth.service'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SidebarTeacherComponent } from "./sidebar-teacher/sidebar-teacher.component";
import { ClassCreatorComponent } from "./class-creator/class-creator.component";
import { ScheduleTeacherComponent } from "./schedule-teacher/schedule-teacher.component";
import { ChatwindowComponent } from "./chatwindow/chatwindow.component";
import { PersonComponent } from "./person/person.component";
import { ProfilEtudiantComponent } from "./profil-etudiant/profil-etudiant.component";
import { ProfilProfComponent } from "./profil-prof/profil-prof.component";
import { LoginprofComponent } from "./loginprof/loginprof.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
    CareerInvestmentComponent,
    TestimonialsComponent,
    LoginComponent,
    TeacherRegistrationComponent,
    StudentRegistrationComponent,
    ProfilEtudiantComponent,
    ProfilProfComponent,
    LoginprofComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'GestionDeCours';

  showClassCreator: boolean = false;
  showHomeSection: boolean = true;
  showTeacherRegister: boolean = false;
  showStudentRegister: boolean = false;
  showLogin: boolean = false;
  showLoginProf: boolean = false;
  isLoggedIn: boolean = false; // Initialize as false
  role: string = ''; // Initialize as empty
  showSchedule: boolean = false;
  showMessagesPage: boolean = false;
  showAppContent = true;
  showStudentProfile: boolean = false;
  showTeacherProfile: boolean = false;
  showStudentForm = false;

  private platformId = inject(PLATFORM_ID);
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    // Check if the code is running in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.isLoggedIn = !!localStorage.getItem('token'); // Check for token
      this.role = localStorage.getItem('role') || ''; // Get role from localStorage
    }
  }

  showTeacherRegistration() {
    this.resetSections();
    this.showTeacherRegister = true;
  }

  navigateToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToSection(section: string) {
    console.log(`Navigating to ${section}`);
  }

  showStudentRegistration() {
    this.resetSections();
    this.showStudentRegister = true;
  }

  showHome() {
    this.resetSections();
    this.showHomeSection = true;
  }

  toggleLogin(show: boolean) {
    this.resetSections();
    this.showLogin = show;
    this.showLoginProf = false; // Ensure teacher login is hidden
  }

  toggleLoginProf(show: boolean) {
    this.resetSections();
    this.showLoginProf = show;
    this.showLogin = false; // Ensure student login is hidden
  }

  toggleRegister(show: boolean): void {
    this.resetSections();
    this.showLogin = show;
  }

  toggleSchedule() {
    this.showSchedule = !this.showSchedule;
  }

  toggleContent() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token'); // Clear token
      localStorage.removeItem('role'); // Clear role
    }
    this.isLoggedIn = false;
    this.resetSections();
    this.showHomeSection = true; // Return to home section
    this.router.navigate(['/']); // Navigate to home route
  }

  toggleAppContent(show: boolean) {
    this.showAppContent = show;
  }

  getRoleFromUser(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('role') || 'etudiant'; // Default to 'etudiant' if role is not set
    }
    return 'etudiant'; // Fallback for non-browser environments
  }

  private resetSections() {
    this.showHomeSection = false;
    this.showLogin = false;
    this.showTeacherRegister = false;
    this.showStudentRegister = false;
    this.showMessagesPage = false;
    this.showTeacherProfile = false;
    this.showStudentProfile = false;
    this.showLoginProf = false;
  }

  navigateToMessages() {
    this.showMessagesPage = true;
  }

  ngAfterViewInit() {
    this.router.events.subscribe(() => {
      setTimeout(() => {
        this.scrollToFragment();
      }, 0);
    });
  }

  scrollToFragment() {
    const fragment = this.router.url.split('#')[1];
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  toggleMessagesPage() {
    this.showMessagesPage = !this.showMessagesPage;
  }

  onClickMessages() {
    this.showMessagesPage = true;
  }

  onStudentLoggedIn() {
    this.isLoggedIn = true;
    this.showStudentProfile = true;
    this.showLogin = false;
    this.router.navigate(['/profil-etudiant']); // Navigate to student profile
  }

  onTeacherLoggedIn() {
    this.isLoggedIn = true;
    this.showTeacherProfile = true;
    this.showLoginProf = false;
    this.router.navigate(['/profil-prof']); // Navigate to teacher profile
  }

  onReturnToHome() {
    this.showHomeSection = true;
    this.showStudentProfile = false;
    this.showTeacherProfile = false;
    this.router.navigate(['/']); // Navigate to home route
  }
}