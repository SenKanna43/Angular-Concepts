import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hooks';

  hide: boolean = true

  number: number = 2024
  secondValue: number = 100
  numbers: number[] = []

  increment() {
    this.number++
  }

  decrement() {
    this.number--
  }

  inVisible() {
    this.hide = !this.hide
  }

  add() {
    // this.numbers.push(1)
    this.numbers = [...this.numbers, 1]
  }
}
