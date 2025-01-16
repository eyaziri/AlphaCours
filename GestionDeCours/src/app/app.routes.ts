import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard'; // Import the AuthGuard

import { LoginComponent } from './login/login.component';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { ProfilEtudiantComponent } from './profil-etudiant/profil-etudiant.component';
import { ProfilProfComponent } from './profil-prof/profil-prof.component';
import { LoginprofComponent } from './loginprof/loginprof.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginprof', component: LoginprofComponent },
  { path: 'student-registration', component: StudentRegistrationComponent },
  { path: 'teacher-registration', component: TeacherRegistrationComponent },

  // Protected routes (require authentication)
  {
    path: 'profil-etudiant',
    component: ProfilEtudiantComponent,
    canActivate: [AuthGuard], // Apply AuthGuard to this route
  },
  {
    path: 'profil-prof',
    component: ProfilProfComponent,
    canActivate: [AuthGuard], // Apply AuthGuard to this route
  },

  // Redirect to home for any unknown routes
  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(routes, routerOptions);