import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

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

  constructor() {
    console.log("constructor called")
  }

  ngOnInit(): void {
    console.log('onInit')
    this.changeLog.push('onInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
    this.changeLog.push(`ngDoCheck: ${this.numbers.toString()}`)
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
    this.changeLog.push('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
    this.changeLog.push('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    this.changeLog.push('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
    this.changeLog.push('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    this.changeLog.push('ngOnDestroy')
  }


}
