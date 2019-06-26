import { Component } from '@angular/core';
import {ChatService} from './chat.service';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginUsername = '';
  constructor(private chatService: ChatService, private userService: UserService) {
    chatService.pushMessage('ChatBot', 'Bienvenue dans le chat');
  }
  login() {
    if (this.loginUsername.length > 0) {
      this.userService.login(this.loginUsername);
      this.loginUsername = '';
    }
  }
}
