import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicConfigComponent } from './basic-config/basic-config.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { DatabaseConfigComponent } from './database-config/database-config.component';
import { ServerStatusEntryComponent } from './server-status-entry/server-status-entry.component';
import { DatabaseConfigEntryComponent } from './database-config-entry/database-config-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicConfigComponent,
    ServerStatusComponent,
    DatabaseConfigComponent,
    ServerStatusEntryComponent,
    DatabaseConfigEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
