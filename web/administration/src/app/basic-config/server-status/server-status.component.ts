import { Component, OnInit } from '@angular/core';
import { ServerStatus } from './server-status.model';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {
  serverStatusArray: ServerStatus[] = [
    new ServerStatus('host database', 'biro84046597'),
    new ServerStatus('partners host CY', 'I14G'),
    new ServerStatus('CRM Stranke opcije host CY ', 'KRATEK')
  ]
  constructor() { }

  ngOnInit() {
  }

}
