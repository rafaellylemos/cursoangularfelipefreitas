import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestButtonComponent } from './test-button/test-button.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    TestButtonComponent,
    FormularioComponent,
    NgifComponent,
    NgforComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
