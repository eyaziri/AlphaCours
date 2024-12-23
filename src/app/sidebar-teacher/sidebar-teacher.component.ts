import { Component , Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-sidebar-teacher',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-teacher.component.html',
  styleUrl: './sidebar-teacher.component.scss'
})
export class SidebarTeacherComponent {
  @Output() showSchedule = new EventEmitter<void>();
  @Output() showMessages = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() showHome = new EventEmitter<void>(); 
  @Output() showEmplois = new EventEmitter<void>();
  @Output() showDoc = new EventEmitter<void>(); 
  @Output() showDev = new EventEmitter<void>(); 

  onClickDev(){
    this.showDev.emit();

  }


  onClickDoc(){
    this.showDoc.emit();

  }
 

  onClickEmplois(){
    this.showEmplois.emit();

  }


  onClickHome() {
    this.showHome.emit();  // Emission de l'événement showHome
  }
  
  onClickSchedule() {
    this.showSchedule.emit();
  }

  

  onClickMessages() {
    this.showMessages.emit();
  }

  onClickLogout() {
    this.logout.emit();
  }
}
