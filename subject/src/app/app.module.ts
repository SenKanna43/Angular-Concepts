import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './components/sender/sender.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { FormsModule } from '@angular/forms';
import { SecondReceiverComponent } from './components/second-receiver/second-receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    ReceiverComponent,
    SecondReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
