import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ironman',
  templateUrl: './ironman.component.html',
  styleUrls: ['./ironman.component.scss']
})
export class IronmanComponent{

  @Input('percentage') percentage: number = 0;

  constructor() { }

  clipPercentage(): number{
    return 100 - this.percentage;
  }
}
