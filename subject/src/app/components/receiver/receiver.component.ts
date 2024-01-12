import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-receiver',
  template: `
  <h2>Subject : {{subjectData}}</h2>
  <h2>Behaviour Subject : {{behaviourSubject}}</h2>
  `,
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {

  subjectData !: string
  behaviourSubject !: string

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.getSubjectData().subscribe((data) => {
      this.subjectData = data
    })
    this.sharedDataService.getBehavioutSubjectData().subscribe((data) => {
      this.behaviourSubject = data
    })
  }
}
