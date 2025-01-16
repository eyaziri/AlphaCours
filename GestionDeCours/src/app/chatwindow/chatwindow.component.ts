import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-chatwindow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatwindow.component.html',
  styleUrls: ['./chatwindow.component.scss']
})
export class ChatwindowComponent {
  emojiPickerVisible = false;  
  selectedEmoji: string | null = null;  
  emojis: string[] = ['🙂', '😂', '😍', '😎', '🥺', '😢', '😜', '😇', '🥳', '🤩']; 
  newMessage: string = ''; 
  messages: { type: 'sent' | 'received', text: string }[] = [
    { type: 'received', text: 'Vous n\'avez pas encore deposer votre projet !' },
    { type: 'sent', text: 'Oui madame , j\'ai des problemes de connextion et j\'ai raté le deadline...  peux-je avoir votre mail pour vous envoyer mon travail' },
    { type: 'received', text: 'ameni@gmail.com mais ne pas depasser ce soir pour m\'envoyer' },
    { type: 'sent', text: 'Merci beaucoup!' }
  ];  

  toggleEmojiPicker() {
    this.emojiPickerVisible = !this.emojiPickerVisible;
  }

  selectEmoji(emoji: string) {
    this.selectedEmoji = emoji;
    this.emojiPickerVisible = false;
  }

  onMessageInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.newMessage = inputElement.value;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      
      this.messages.push({
        type: 'sent',
        text: this.newMessage
      });

      this.newMessage = '';
    }
  }
}
