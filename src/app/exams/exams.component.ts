import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.sass']
})
export class ExamsComponent implements OnInit {
  added : boolean;
  marks = '';
  results = '';
  status = 'Pending';
  remainingMins: number = 45;
  remainingSec: number = 59;
  interval;
  constructor() { }

  ngOnInit() {
  }
  close_pop_up(event:any) {
    this.added = false;
    document.getElementById("pop-up").style.display = "none";
    document.getElementById("pop-up2").style.display = "block";
  }
  open_pop_up(event:any) {
    this.added = false;
    document.getElementById("pop-up").style.display = "block";
    this.startTimer();
  }
  close_pop_up2(event:any) {
    this.marks = '100%';
    this.results = 'Pass';
    this.status = 'Completed';
    this.added = false;
    document.getElementById("pop-up2").style.display = "none";
  }

startTimer() {
    this.interval = setInterval(() => {
      if(this.remainingSec > 0) {
        this.remainingSec--;
      } else {
        this.remainingSec = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  
}
