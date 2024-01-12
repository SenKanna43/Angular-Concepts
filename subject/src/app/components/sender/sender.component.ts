import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-sender',
  template: `
  <input type="text" [(ngModel)]="inputData" />
  <button (click)="sendData()" >Send Data</button>
  `,
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  inputData = ''

  constructor(private sharedDataService: SharedDataService) { }

  sendData() {
    this.sharedDataService.sendData(this.inputData)
  }

}
