import { Observable } from 'rxjs/Observable';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

@Injectable()
export class ToastService {

  messages = new Array<Message>();
  messagesChannel = new Subject<Array<Message>>();

  constructor() { }

  getMessages(): Observable<Array<Message>> {
    return this.messagesChannel.asObservable();
  }

  sendMessage(content: string, style: string) {
    const message = new Message(content, style);
    this.messages.push(message);
    this.messagesChannel.next(this.messages);
  }

  dismissMessage(id: number) {
    this.messages = this.messages.filter((value, index, array) => {
      return value.id !== id;
    });
    this.messagesChannel.next(this.messages);
  }
}

/**
 * This is a custom class to model the alert message
 */
export class Message {
  id: number;
  content: string;
  style: string;
  dismissed = false;

  constructor(content, style?) {
    this.content = content;
    this.style = style || 'info';
    this.id = Math.random();
  }
}

/**
 * These are the constants for Bootstrap 4 alert type
 */
export enum BS4AlertType {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LIGHT = 'light',
  DARK = 'dark'
}
