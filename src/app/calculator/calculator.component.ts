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
    this.calcString += input;
  }
  clear() {
    this.calcString = '';
    this.resultString = '';
  }
  execute() {
    const sections = this.calcString.split(/(\+|-|\*|\/)/);
    if (sections.length !== 1) {
      const expression = parseFloat(sections[0]) + sections[1] + parseFloat(sections[2]);
      const resultDecimal = eval(expression);
      this.resultString = resultDecimal.toString();
    }
  }
}
