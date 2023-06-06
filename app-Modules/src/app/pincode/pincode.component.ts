import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss']
})
export class PincodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onDigitCheck(event:any) {
    const currentEle = event.target;
    if (event.code === 'Backspace') {
      if (currentEle.Backspace || currentEle.value.length === 0) {
        const element: HTMLInputElement = event.srcElement.previousElementSibling;
        if (element) {
          element.focus();
          element.select();
        }
      }
      currentEle.Backspace = true;
      return;
    }
    currentEle.Backspace = false;

    if (!(event.code.startsWith("Digit") || event.code.startsWith("Numpad")) || currentEle.value.length > 1 || Number.isNaN(Number(event.key))) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return;
    }

    if (currentEle.value.length > 0) {
      currentEle.value = "";
    }

    setTimeout(() => {
      const element = event.srcElement.nextElementSibling;
      if (element) {
        element.focus();
        element.select();
      }
    });
  }
}
