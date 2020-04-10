import { Component, OnInit, Input } from '@angular/core';
import {CustomerParamConfig } from './customer-param-config.model';
@Component({
  selector: 'app-customer-param-config',
  templateUrl: './customer-param-config.component.html',
  styleUrls: ['./customer-param-config.component.css']
})
export class CustomerParamConfigComponent implements OnInit {

  @Input() customerParamConfig: CustomerParamConfig;

  constructor() { }

  ngOnInit() {
  }

}
