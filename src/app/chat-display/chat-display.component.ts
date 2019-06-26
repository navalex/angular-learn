import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.scss']
})
export class ChatDisplayComponent implements OnInit {
  userMessage = '';
  constructor(private chatService: ChatService, private userService: UserService) {
  }

  ngOnInit() {
  }

  pushMessage() {
    if (this.userMessage.length > 0) {
      this.chatService.pushMessage(this.userService.getUsername(), this.userMessage);
      this.userMessage = '';
    }
  }

  removeMessage(id) {
    this.chatService.spliceMessage(id);
  }

}
