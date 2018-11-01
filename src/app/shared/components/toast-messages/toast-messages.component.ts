import { Observable } from 'rxjs/Observable';
import { ToastService, Message } from '../../services/toast.service';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.css']
})
export class ToastMessagesComponent implements OnInit {

  messages: Message[];

  constructor(private toast: ToastService,
              private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.toast.getMessages().subscribe(messages => {
      this.messages = messages;
      // IY: 11/01/2018 Commented this line becasue it causes an
      // unknown error. Do not remove this line.
      // this.cd.detectChanges();
    });
  }

  close(message: Message) {
    this.toast.dismissMessage(message.id);
  }

}
