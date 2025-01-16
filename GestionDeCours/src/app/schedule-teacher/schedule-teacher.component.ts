import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-teacher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-teacher.component.html',
  styleUrls: ['./schedule-teacher.component.scss']
})
export class ScheduleTeacherComponent {
  newEvent: { [key: string]: string } = {
    title: '',
    start: '',
    end: '',
    room: '',
    day: '',
  };

  selectedMonth: string = 'Février';
  months: string[] = ['Janvier', 'Février', 'Mars', 'Avril'];
  days: string[] = ['14 Dim', '15 Lun', '16 Mar', '17 Mer', '18 Jeu', '19 Ven', '20 Sam'];
  hours: string[] = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  ];

  events: any = {
    '14 Dim': [{ title: 'info2B', start: '10:00', end: '11:20', room: 's21' }],
    '16 Mar': [
      { title: 'info2A', start: '14:30', end: '15:50', room: 's22' },
      { title: 'info2B', start: '12:30', end: '13:30', room: 's31' },
    ],
    '19 Ven': [
      { title: 'info2B', start: '15:00', end: '16:30', room: 's22' },
    ],
  };

  isAddingEvent = false;
  errorMessage: string = '';

  setEventStyle(event: any) {
    const startHour = parseInt(event.start.split(':')[0], 10);
    const startMinute = parseInt(event.start.split(':')[1], 10);
    const duration =
      (parseInt(event.end.split(':')[0], 10) - startHour) * 60 +
      (parseInt(event.end.split(':')[1], 10) - startMinute);
    return {
      top: `${(startHour - 9) * 60 + startMinute}px`,
      height: `${duration}px`,
    };
  }

  onMonthChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      this.selectedMonth = target.value;
    }
  }

  onAddEvent() {
    this.isAddingEvent = true;
  }

  updateEventField(field: string, value: string) {
    this.newEvent[field] = value;
  }

  timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  isRoomAvailable(day: string, start: string, end: string, room: string): boolean {
    const dayEvents = this.events[day] || [];
    for (const event of dayEvents) {
      const eventStart = this.timeToMinutes(event.start);
      const eventEnd = this.timeToMinutes(event.end);
      const newEventStart = this.timeToMinutes(start);
      const newEventEnd = this.timeToMinutes(end);

      if (event.room === room && newEventStart < eventEnd && newEventEnd > eventStart) {
        return false;
      }
    }
    return true;
  }

  saveEvent() {
    const { title, start, end, room, day } = this.newEvent;
  
    if (!day || !start || !end || !room) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      return;
    }
  
    const dayEvents = this.events[day] || [];
    const newEventStart = this.timeToMinutes(start);
    const newEventEnd = this.timeToMinutes(end);
  
    // Vérification des conflits de plage horaire
    for (const event of dayEvents) {
      const eventStart = this.timeToMinutes(event.start);
      const eventEnd = this.timeToMinutes(event.end);
  
      if (newEventStart < eventEnd && newEventEnd > eventStart) {
        this.errorMessage = `Un événement est déjà planifié à cette plage horaire (${event.start} - ${event.end}).`;
        return;
      }
    }
  
    // Vérification de la disponibilité de la salle
    for (const event of dayEvents) {
      if (event.room === room) {
        const eventStart = this.timeToMinutes(event.start);
        const eventEnd = this.timeToMinutes(event.end);
  
        if (newEventStart < eventEnd && newEventEnd > eventStart) {
          this.errorMessage = `La salle ${room} est déjà utilisée pendant cette période.`;
          return;
        }
      }
    }
  
    // Ajout de l'événement si tout est valide
    if (!this.events[day]) {
      this.events[day] = [];
    }
  
    this.events[day].push({ title, start, end, room, day });
  
    this.isAddingEvent = false;
    this.newEvent = { title: '', start: '', end: '', room: '', day: '' };
    this.errorMessage = '';
  }
  
  cancelAddEvent() {
    this.isAddingEvent = false;
    this.errorMessage = '';
  }

  getInputValue(event: Event): string {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    return target?.value || '';
  }
}