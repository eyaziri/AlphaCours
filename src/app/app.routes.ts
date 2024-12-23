import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { ProfilEtudiantComponent } from './profil-etudiant/profil-etudiant.component';  // Assurez-vous que ce composant est bien importé
import { ProfilProfComponent } from './profil-prof/profil-prof.component';  // Assurez-vous que ce composant est bien importé
import { LoginprofComponent } from './loginprof/loginprof.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', 
  scrollPositionRestoration: 'enabled' 
};

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginprof', component: LoginprofComponent },
  { path: 'student-registration', component: StudentRegistrationComponent },
  { path: 'teacher-registration', component: TeacherRegistrationComponent },
  { path: 'profil-etudiant', component: ProfilEtudiantComponent },
  { path: 'profil-prof', component: ProfilProfComponent }
];


export const routing = RouterModule.forRoot(routes, routerOptions);
