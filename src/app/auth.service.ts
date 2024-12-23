import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {}

  login() {
    console.log('L\'utilisateur est maintenant connecté');
    this.isLoggedInSubject.next(true);
  }

  logout() {
    console.log('L\'utilisateur est maintenant déconnecté');
    this.isLoggedInSubject.next(false);
  }
}
