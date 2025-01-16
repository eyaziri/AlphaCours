// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api'; // Base URL of your backend

  constructor(private http: HttpClient) {}

  // Register a new user (for both students and teachers)
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  // Login a user
  login(credentials: { email: string; password: string; role: string }): Observable<any> {
    console.log(credentials);
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }

  // Get user profile (protected route)
  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/protected/profile`);
  }
}