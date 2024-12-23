import { Component } from '@angular/core';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss'
})
export class DocumentComponent {
  documents = [
    { name: 'Birth Certificate', type: 'pdf' },
    { name: 'Form 100', type: 'pdf' },
    { name: 'Contract', type: 'pdf' },
  ];
}
