import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-active-counter',
  templateUrl: './active-counter.component.html',
  styleUrls: ['./active-counter.component.css']
})
export class ActiveCounterComponent implements OnInit {
  @Input()
  activeCounter;
  count;

  constructor() {
  }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.activeCounter.count++;
  }
}
