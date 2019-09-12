import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http';

// import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard/admin-dashboard.component';
// import { AdminNavComponent } from './admin-nav/admin-nav.component';
@NgModule({
  declarations: [
    AppComponent
    // AdminDashboardComponent,
    // AdminNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
