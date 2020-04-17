import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  resultString = '';

  constructor() { }

  ngOnInit(): void {
  }

  read = (input) => this.resultString += input;
  clear = () => this.resultString = '';
  backspace = () => this.resultString = this.resultString.substring(0, this.resultString.length - 1);
  execute() {
    const sections = this.resultString.split(/(\+|-|\*|\/)/);
    const expression = parseFloat(sections[0]) + sections[1] + parseFloat(sections[2]);
    const resultDecimal = eval(expression);
    this.resultString = resultDecimal.toString();
  }
}
