import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'; // Nécessaire pour les directives *ngFor et *ngIf
import { FormsModule } from '@angular/forms'; // Nécessaire pour utiliser [(ngModel)]

@Component({
  selector: 'app-document',
  standalone: true, // Confirme que le composant est autonome
  imports: [NgFor, NgIf, FormsModule], // Importez uniquement ce qui est nécessaire
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'] // Support pour le SCSS
})
export class DocumentComponent {
  documents: { nom: string; type: string; heure: string }[] = [
    { nom: 'Document1.pdf', type: 'PDF', heure: '9:52 AM' },
    { nom: 'Document2.png', type: 'PNG', heure: '9:00 AM' },
    { nom: 'Document3.mp4', type: 'Vidéo', heure: '8:37 AM' },
    { nom: 'Document4.docx', type: 'Word', heure: '8:10 AM' }
  ];

  newDocument = { nom: '', type: '', heure: '' };

  addDocument() {
    if (this.newDocument.nom && this.newDocument.type && this.newDocument.heure) {
      this.documents.push({ ...this.newDocument });
      this.newDocument = { nom: '', type: '', heure: '' }; // Réinitialisation
    }
  }
}
