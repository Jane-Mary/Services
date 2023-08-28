import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LeftBtnComponent } from './btn/left-btn/left-btn.component';
import { RightBtnComponent } from './btn/right-btn/right-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LeftBtnComponent,
    RightBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
