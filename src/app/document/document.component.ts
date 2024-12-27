import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'; // Nécessaire pour *ngFor et *ngIf
import { FormsModule } from '@angular/forms'; // Nécessaire pour [(ngModel)]

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule], // Ajoutez les modules nécessaires
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'] // Correction ici : styleUrls
})
export class DocumentComponent {
  documents: Document[] = [
    { nom: 'Document1.pdf', type: 'PDF', heure: '9:52 AM' },
    { nom: 'Document2.png', type: 'PNG', heure: '9:00 AM' },
    { nom: 'Document3.mp4', type: 'Vidéo', heure: '8:37 AM' },
    { nom: 'Document4.docx', type: 'Word', heure: '8:10 AM' }
  ];

  newDocument: Document = { nom: '', type: '', heure: '' };

  addDocument() {
    if (this.newDocument.nom && this.newDocument.type && this.newDocument.heure) {
      this.documents.push({ ...this.newDocument });
      this.newDocument = { nom: '', type: '', heure: '' }; // Réinitialise le formulaire
    }
  }
}

export interface Document {
  nom: string;
  type: string;
  heure: string;
}
