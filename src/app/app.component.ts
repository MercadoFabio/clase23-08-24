import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddMessageComponent } from './add-message/add-message.component';
import { ListMessageComponent } from "./list-message/list-message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddMessageComponent, ListMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 messages: string[] = [];

  addMessage(newMessage: string) {
    console.log(newMessage);
    this.messages.push(newMessage);
  }
}
