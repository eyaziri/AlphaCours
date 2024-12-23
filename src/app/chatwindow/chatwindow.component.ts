import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chatwindow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatwindow.component.html',
  styleUrl: './chatwindow.component.scss'
})
export class ChatwindowComponent {

  emojiPickerVisible = false;  // Contrôle de l'affichage de la liste des emojis
  selectedEmoji: string | null = null;  // L'emoji sélectionné
  emojis: string[] = ['🙂', '😂', '😍', '😎', '🥺', '😢', '😜', '😇', '🥳', '🤩']; // Liste d'emojis

  // Fonction pour afficher ou masquer la liste des emojis
  toggleEmojiPicker() {
    this.emojiPickerVisible = !this.emojiPickerVisible;
  }

  // Fonction pour sélectionner un emoji
  selectEmoji(emoji: string) {
    this.selectedEmoji = emoji;
    this.emojiPickerVisible = false;  // Ferme la liste après sélection
  }
}
