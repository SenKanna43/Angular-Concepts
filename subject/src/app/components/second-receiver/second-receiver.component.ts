import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-second-receiver',
  template: `
  <button (click)="subscribeData()" >Subscribe</button>
  <div *ngIf="subscribed">
  <h2>Subject : {{subjectData}}</h2>
  <h2>Behaviour Subject : {{behaviourSubject}}</h2>
  </div>
  
  `,
  styleUrls: ['./second-receiver.component.scss']
})
export class SecondReceiverComponent {
  subjectData !: string
  behaviourSubject !: string
  subscribed: boolean = false

  constructor(private sharedDataService: SharedDataService) { }

  subscribeData() {
    this.sharedDataService.getSubjectData().subscribe((data) => {
      this.subjectData = data
    })
    this.sharedDataService.getBehavioutSubjectData().subscribe((data) => {
      this.behaviourSubject = data
    })
    this.subscribed = true
  }
}
