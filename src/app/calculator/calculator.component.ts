import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calcString = '';
  resultString = '';

  constructor() { }

  ngOnInit(): void {
  }

  backspace() {
    if (this.resultString.length === 0) {
      this.calcString = this.calcString.substring(0, this.calcString.length - 1);
    }
  }
  read(input) {
    if (this.resultString.length !== 0) {
      this.resultString = '';
      this.calcString = '';
    }
    if (input === '()') {
      const regex = /\(/g;
      const brackCount = this.calcString.match(regex) !== null ? this.calcString.match(regex).length : 0;
      if (this.calcString.length === brackCount ||
          brackCount === 0) {
        this.calcString += '(';
      } else {
        this.calcString += ')';
      }
    } else {
      this.calcString += input;
    }
  }
  clear() {
    this.calcString = '';
    this.resultString = '';
  }
  execute() {
    const sections = this.calcString.split(/(\+|-|\*|\/|\(|\))/);
    if (sections.length !== 1) {
      let expression = '';
      for (let i = 0; i < sections.length; i++) {
        if (sections[i] !== '') {
          // TODO: this is a quick fix, need to figure out why blank spaces are there in split
          if (i % 2 === 0) {
            expression += parseFloat(sections[i]);
          } else {
            expression += sections[i];
          }
        }
      }
      const resultDecimal = eval(expression);
      this.resultString = resultDecimal.toString();
    }
  }
}
