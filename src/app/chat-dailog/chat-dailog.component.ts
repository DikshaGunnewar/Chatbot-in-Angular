import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { Message, ChatService } from "../services/chat.service";

@Component({
  selector: 'app-chat-dailog',
  templateUrl: './chat-dailog.component.html',
  styleUrls: ['./chat-dailog.component.css']
})
export class ChatDailogComponent implements OnInit {


 messages: Observable<Message[]>;
 formValue: string;

  constructor(public chat: ChatService) { }

   ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }

 sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }
}
