import { Component, OnInit, Input } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'app-database-config-entry',
  templateUrl: './database-config-entry.component.html',
  styleUrls: ['./database-config-entry.component.css']
})
export class DatabaseConfigEntryComponent implements OnInit {

  @Input() entry: Entry;
  kurac: string;

  constructor() { }

  ngOnInit() {
  }

}
