import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="calendar">
      <div class="calendar-header">
        <span (click)="prevMonth()" class="nav-button">&lt;</span>
        <span>{{ monthYear }}</span>
        <span (click)="nextMonth()" class="nav-button">&gt;</span>
      </div>
      <div class="calendar-body">
        <div class="calendar-days">
          <span *ngFor="let day of weekDays">{{ day }}</span>
        </div>
        <div class="calendar-dates">
          <div *ngFor="let empty of emptySlots" class="empty"></div>
          <div
            *ngFor="let day of monthDays"
            [class.current-day]="isToday(day)"
            class="date"
          >
            {{ day }}
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  weekDays: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  monthYear: string = '';
  emptySlots: number[] = [];
  monthDays: number[] = [];

  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  today: Date = new Date();

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar(): void {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Affiche le mois et l'année actuels
    this.monthYear = `${months[this.currentMonth]} ${this.currentYear}`;

    // Récupère le 1er jour du mois
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();

    // Récupère le nombre total de jours dans le mois
    const totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    // Crée les cases vides et les jours du mois
    this.emptySlots = Array(firstDay).fill(0); // cases vides
    this.monthDays = Array.from({ length: totalDays }, (_, i) => i + 1); // jours du mois
  }

  isToday(day: number): boolean {
    return (
      day === this.today.getDate() &&
      this.currentMonth === this.today.getMonth() &&
      this.currentYear === this.today.getFullYear()
    );
  }

  prevMonth(): void {
    this.currentMonth -= 1;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear -= 1;
    }
    this.renderCalendar();
  }

  nextMonth(): void {
    this.currentMonth += 1;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear += 1;
    }
    this.renderCalendar();
  }
}
