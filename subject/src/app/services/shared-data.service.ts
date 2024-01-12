import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private subjectData = new Subject<string>()
  private behaviourSubject = new BehaviorSubject<string>('initial value')

  sendData(data: string) {
    this.subjectData.next(data)
    this.behaviourSubject.next(data)
  }

  getSubjectData() {
    return this.subjectData.asObservable()
  }

  getBehavioutSubjectData() {
    return this.behaviourSubject.asObservable()
  }
}
