import { Component, OnInit } from '@angular/core';
import { Entry } from '../database-config-entry/entry.model';

@Component({
  selector: 'app-database-config',
  templateUrl: './database-config.component.html',
  styleUrls: ['./database-config.component.css']
})
export class DatabaseConfigComponent implements OnInit {
  entries: Entry[] = [
    new Entry("Host", "http://192.168.0.123:13694"),
    new Entry("Webhook", "http://192.168.0.177:5005")
  ];
  constructor() { }

  ngOnInit() {
  }

}
