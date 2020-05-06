import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.sass']
})
export class ExamsComponent implements OnInit {
  added : boolean;
  constructor() { }

  ngOnInit() {
  }
  close_pop_up(event:any) {
    this.added = false;
    document.getElementById("pop-up").style.display = "none";
  }
  open_pop_up(event:any) {
    this.added = false;
    document.getElementById("pop-up").style.display = "block";
  }

}
