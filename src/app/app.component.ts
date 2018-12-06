import { interval } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DOCUMENT } from '@angular/common';
import { floor, round } from 'lodash';

interface times {
  seconds: string,
  seconds_percentage:number;
  minutes: string,
  minutes_percentage:number;
  hours: string,
  hours_percentage: number,
  days: string
  days_percentage: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  colors: string[] = ['deepskyblue', 'red', 'orange', 'turquoise']
  selected: string = 'deepskyblue';
  percentage: number = 0;


  end: any = new Date();
  now: any = new Date();
  newEnd: any = new Date(this.end.setHours(this.end.getHours() + 27));
  timeTo: any;

  times: times;

  constructor(updates: SwUpdate, @Inject(DOCUMENT) dom: Document) {

    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => dom.location.reload())
    });

  }

  ngOnInit() {
    // interval(100).subscribe(() => {
    //   this.setPercentage();
    //   this.setCountdownValues();
    // })
  }

  getPercentage(value, total) {
    if (value === 0 || (total === 0 && value === 0)) return 0;

    return round((value / total) * 100, 1);
}

  setPercentage() {
    this.percentage += 1
    if (this.percentage >= 100) {
      this.percentage = 0
    };
  }

  setCountdownValues() {
    this.now = new Date();

    this.timeTo = Date.parse(this.newEnd) - Date.parse(this.now);

    let seconds = floor((this.timeTo % (1000 * 60)) / 1000);
    let minutes = floor((this.timeTo % (1000 * 60 * 60)) / (1000 * 60));
    let hours = floor((this.timeTo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = floor(this.timeTo / (1000 * 60 * 60 * 24));

    this.times = {
      seconds: this.setPrefix(seconds),
      seconds_percentage:this.getPercentage(seconds, 60),
      minutes: this.setPrefix(minutes),
      minutes_percentage:this.getPercentage(minutes, 60),
      hours: this.setPrefix(hours),
      hours_percentage: this.getPercentage(hours, 24),
      days: this.setPrefix(days),
      days_percentage:this.getPercentage(days, 30.5)
    }
  }

  setPrefix(value) {
    if (value <= 0) {
      return '00';
    }

    if (value < 10) {
      return `0${value}`;
    }

    return value;
  }

  select(color: string): void {
    this.selected = color;
  }

  style(): Object {
    return {
      fill: this.selected,
    }
  }
}
