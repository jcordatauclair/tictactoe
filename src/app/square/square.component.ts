import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton status="default" *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button> 
    <button nbButton hero status="warning" *ngIf="value == 'O'">{{ value }}</button> 
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 4em !important; }']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
