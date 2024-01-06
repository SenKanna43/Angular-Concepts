import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hooks';

  private number: number = 2024
  secondValue: number = 100
  numbers: number[] = []

  get counter() {
    return this.number
  }

  set counter(value: number) {
    this.number = value
  }

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }

  add() {
    this.numbers.push(1)
  }
}
