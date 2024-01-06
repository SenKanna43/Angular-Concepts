import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck {

  @Input() myCounter !: number
  @Input() secondValue !: number
  @Input() numbers !: number[]

  public changeLog: string[] = []

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes)
    for (const propName in changes) {
      const change: any = changes[propName]
      const current = JSON.stringify(change.currentValue)
      const previous = JSON.stringify(change.previousValue)
      this.changeLog.push(
        `ngOnChanges ${propName}: currentValue = ${current} , previousValue = ${previous}, firstChange = ${change.firstChange} `
      )
    }
  }

  ngOnInit(): void {
    console.log('onInit')
    this.changeLog.push('onInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
    this.changeLog.push(`ngDoCheck: ${this.numbers.toString()}`)
  }


}
