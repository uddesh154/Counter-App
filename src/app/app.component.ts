import { Component } from '@angular/core';
import { HistoryService, CounterAction } from './services/history.service';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Counter with History';

  constructor(private history: HistoryService) { }

  get entries() { return this.history.entries; }
  clearHistory = () => this.history.clear();
}