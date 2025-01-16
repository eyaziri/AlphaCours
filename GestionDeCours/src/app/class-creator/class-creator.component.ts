import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-creator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './class-creator.component.html',
  styleUrls: ['./class-creator.component.scss']
})
export class ClassCreatorComponent {
  @Output() registrationCompleted = new EventEmitter<void>();

  classForm: FormGroup;
  uploadedFileName: string | null = null; // Nom du fichier sélectionné
  uploadedFileUrl: string | null = null; // URL temporaire du fichier sélectionné
  courseData: any = null; // Données du cours à afficher

  constructor(private fb: FormBuilder) {
    this.classForm = this.fb.group({
      Titre: [''],
      Specialite: [''],
      Enseignant: [''],
      Description: [''],
      AttachedFile: [null] // Contient le fichier téléchargé
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      this.uploadedFileName = file.name;

      // Générer une URL temporaire pour accéder au fichier
      this.uploadedFileUrl = URL.createObjectURL(file);

      this.classForm.patchValue({
        AttachedFile: file // Ajoute le fichier au formulaire
      });
    }
  }

  onSubmit() {
    if (this.classForm.valid) {
      // Enregistre les données du formulaire dans `courseData`
      this.courseData = {
        Titre: this.classForm.get('Titre')?.value,
        Specialite: this.classForm.get('Specialite')?.value,
        Enseignant: this.classForm.get('Enseignant')?.value,
        Description: this.classForm.get('Description')?.value,
        FileUrl: this.uploadedFileUrl // URL du fichier attaché
      };

      console.log('Formulaire soumis avec :', this.courseData);
      this.registrationCompleted.emit(); // Émet l'événement pour signaler la complétion
    } else {
      console.error('Formulaire invalide.');
    }
  }

  openFile(fileUrl: string | null): void {
    if (fileUrl) {
      window.open(fileUrl, '_blank'); // Ouvre le fichier dans un nouvel onglet
    }
  }
}