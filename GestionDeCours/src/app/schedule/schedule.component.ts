import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  newEvent: { [key: string]: string } = {
    title: '',
    start: '',
    end: '',
    room: '',
    day: '',
  };

  // Sélection du mois et jours
  selectedMonth: string = 'Février';
  months: string[] = ['Janvier', 'Février', 'Mars', 'Avril'];
  days: string[] = ['14 Dim', '15 Lun', '16 Mar', '17 Mer', '18 Jeu', '19 Ven', '20 Sam'];
  hours: string[] = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  ];

  // Événements existants
  events: any = {
    '14 Dim': [{ title: 'Math', start: '10:00', end: '11:20', room: 's21' }],
    '16 Mar': [
      { title: 'Angular', start: '14:30', end: '15:50', room: 's22' },
      { title: 'SGBD', start: '12:30', end: '13:30', room: 's31' },
    ],
    '19 Ven': [
      { title: 'Java', start: '15:00', end: '16:30', room: 's22' },
    ],
  };

  // État d'ajout d'événement
  isAddingEvent = false;

  // Fonction pour définir le style de l'événement
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

  // Fonction pour changer de mois
  onMonthChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      this.selectedMonth = target.value;
      console.log('Mois sélectionné:', this.selectedMonth);
    }
  }

  // Fonction pour ajouter un événement
  onAddEvent() {
    this.isAddingEvent = true;
  }

  // Mise à jour du champ de l'événement
  updateEventField(field: string, value: string) {
    this.newEvent[field] = value; // Assure que la valeur est bien définie dans le bon champ
  }

  // Sauvegarde de l'événement
  saveEvent() {
    if (!this.newEvent['day'] || !this.events[this.newEvent['day']]) {
      // Si la clé 'day' n'existe pas, on crée une nouvelle entrée
      this.events[this.newEvent['day']] = [];
    }

    // Ajoute l'événement à la journée correspondante
    this.events[this.newEvent['day']].push({
      title: this.newEvent['title'],
      start: this.newEvent['start'],
      end: this.newEvent['end'],
      room: this.newEvent['room'],
      day: this.newEvent['day']
    });

    // Réinitialisation du formulaire et de l'état d'ajout
    this.isAddingEvent = false;
    this.newEvent = { title: '', start: '', end: '', room: '', day: '' };
  }

  // Annuler l'ajout d'événement
  cancelAddEvent() {
    this.isAddingEvent = false;
  }

  getInputValue(event: Event): string {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    return target?.value || ''; // return empty string if target is null or undefined
  }
}
