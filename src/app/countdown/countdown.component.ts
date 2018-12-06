import { Component, Input} from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})

export class CountdownComponent{
  @Input('times') times = {};


  constructor() {
  }

}
