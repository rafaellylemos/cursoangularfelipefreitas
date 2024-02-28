import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestButtonComponent } from './test-button/test-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TestButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
