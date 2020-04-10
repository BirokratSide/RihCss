import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicConfigComponent } from './basic-config/basic-config.component';
import { ServerStatusComponent } from './basic-config/server-status/server-status.component';
import { DatabaseConfigComponent } from './basic-config/database-config/database-config.component';
import { DatabaseConfigEntryComponent } from './basic-config/database-config-entry/database-config-entry.component';
import { CustomerParamConfigComponent } from './customer-param-config/customer-param-config.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicConfigComponent,
    ServerStatusComponent,
    DatabaseConfigComponent,
    DatabaseConfigEntryComponent,
    CustomerParamConfigComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
