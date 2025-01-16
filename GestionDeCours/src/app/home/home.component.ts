import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Output() showRegister = new EventEmitter<boolean>();
  @Output() showRegisterprof = new EventEmitter<boolean>();
  
}
