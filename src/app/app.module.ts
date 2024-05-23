import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; // Importa el NavbarComponent

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, // Declara el NavbarComponent
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    // Otros módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
