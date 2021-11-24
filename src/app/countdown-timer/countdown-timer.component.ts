import {Component, OnInit} from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  title = 'babylon';
  days = '';
  hours = ''
  minutes = '';
  seconds = '';

  constructor() {
  }

  ngOnInit(): void {
    this.timeUntil();
  }

  timeUntil() {
    let eventTime = moment('2021-11-28').toDate();
    let currentTime = new Date();
    let diffTime = eventTime.getTime() - currentTime.getTime();
    let interval = 1000;
    let duration: any = moment.duration(diffTime, 'milliseconds');

    setInterval(() => {
      duration = moment.duration(duration - interval, 'milliseconds');
      this.days = duration.days();
      this.hours = duration.hours();
      this.minutes = duration.minutes();
      this.seconds = duration.seconds();
    }, interval);
  }

  getFormattedTime(character: string) {
    if(character.toString().length === 1){
      return '0' + character;
    }

    return character;
  }
}
