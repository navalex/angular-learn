import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages = [
  ];
  pushMessage(Inauthor: string, Incontent: string) {
    this.messages.push({author: Inauthor, content: Incontent, date: Date.now()});
  }
  spliceMessage(index) {
    this.messages.splice(index, 1);
  }
  constructor() { }
}
