import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() toggleSchedule: EventEmitter<void> = new EventEmitter<void>();
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() navigateToMessages: EventEmitter<void> = new EventEmitter<void>();
  @Output() navigateToHome: EventEmitter<void> = new EventEmitter<void>();
  @Output() exitToHome: EventEmitter<void> = new EventEmitter<void>();

  onClickExit() {
    this.exitToHome.emit(); // Émet l'événement pour revenir à la page principale
  }

  onClickHome() {
    this.navigateToHome.emit(); // Émet l'événement pour naviguer vers la section d'accueil
  }

  
  onClickMessages() {
    this.navigateToMessages.emit();
  }
  
  onClickSchedule() {
    this.toggleSchedule.emit();
  }
  onClickLogout() {
    this.logout.emit();
  }
  
}
