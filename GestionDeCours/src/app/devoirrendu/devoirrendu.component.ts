import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-devoirrendu',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './devoirrendu.component.html',
  styleUrl: './devoirrendu.component.scss'
})
export class DevoirrenduComponent {
  classes = [
    {
      nom: 'Classe A',
      documents: [
        { nom: 'Exercice1.pdf', type: 'PDF', date: '20/12/2024' },
        { nom: 'ProjetA.docx', type: 'Word', date: '19/12/2024' },
      ],
    },
    {
      nom: 'Classe B',
      documents: [
        { nom: 'TP2.png', type: 'Image', date: '21/12/2024' },
        { nom: 'RapportB.pdf', type: 'PDF', date: '18/12/2024' },
      ],
    },
  ];

  // Méthode pour ajouter un document
  addDocument(classe: any, nom: string, type: string, date: string): void {
    if (nom && type && date) {
      classe.documents.push({ nom, type, date });
    } else {
      console.error('Tous les champs sont requis pour ajouter un document.');
    }
  }
}
