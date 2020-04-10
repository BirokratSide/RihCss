import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-config',
  template: `
    <div class="outer__container">
      <app-database-config></app-database-config>
      <app-server-status></app-server-status>
    </div>
  `,
  styles: [`
    .outer__container {
      width: 80%;
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `]
})
export class BasicConfigComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
