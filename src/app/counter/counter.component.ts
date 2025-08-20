import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterAction, HistoryService } from '../services/history.service';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = 0;

    constructor(private history: HistoryService) { }

    private commit(action: CounterAction) {
    switch (action) {
      case 'increment': this.count += 1; break;
      case 'decrement': this.count -= 1; break;
      case 'reset': this.count = 0; break;
    }
    this.history.log(action, this.count);
  }


  onInc = () => this.commit('increment');
  onDec = () => this.commit('decrement');
  onReset = () => this.commit('reset');


}