import { Injectable } from '@angular/core';

export type CounterAction = 'increment' | 'decrement' | 'reset';

export interface HistoryEntry {
  id: number;
  action: CounterAction;
  newValue: number;
  label: string;
  timestamp: Date;
}


@Injectable({ providedIn: 'root' })
export class HistoryService {
  private _entries: HistoryEntry[] = [];
  private nextId = 1;

  get entries(): HistoryEntry[] {
    return this._entries;
  }

  log(action: CounterAction, newValue: number) {
    const label = this.formatLabel(action, newValue);
    this._entries = [
      ...this._entries,
      { id: this.nextId++, action, newValue, label, timestamp: new Date() }
    ];
  }


  clear() {
    this._entries = [];
    this.nextId = 1;
  }


  private formatLabel(action: CounterAction, value: number): string {
    switch (action) {
      case 'increment':
        return `[+1] Counter is now ${value}`;
      case 'decrement':
        return `[-1] Counter is now ${value}`;
      case 'reset':
      default:
        return `[Reset] Counter is now ${value}`;
    }
  }
}
