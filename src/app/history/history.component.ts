import { Component, Input } from '@angular/core';
import { HistoryEntry } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  @Input() items: HistoryEntry[] = [];
  @Input() onClear?: () => void;
}