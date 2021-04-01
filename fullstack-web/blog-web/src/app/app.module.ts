import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResgisterComponent } from './pages/resgister/resgister.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { NameInputComponent } from './components/inputs/name-input/name-input.component';
import { DescriptionTextareaComponent } from './components/inputs/description-textarea/description-textarea.component';
import { AbstractTextareaComponent } from './components/inputs/abstract-textarea/abstract-textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResgisterComponent,
    NavbarComponent,
    HeaderComponent,
    CardComponent,
    NameInputComponent,
    DescriptionTextareaComponent,
    AbstractTextareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
