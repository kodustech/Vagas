import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './pages/dashboard/components/card/card.component';
import { NameInputComponent } from './pages/list/pages/register/components/name-input/name-input.component';
import { DescriptionTextareaComponent } from './pages/list/pages/register/components/description-textarea/description-textarea.component';
import { AbstractTextareaComponent } from './pages/list/pages/register/components/abstract-textarea/abstract-textarea.component';
import { SaveButtonComponent } from './pages/list/pages/register/components/save-button/save-button.component';
import { DatatimeInputComponent } from './pages/dashboard/components/datatime-input/datatime-input.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';
import { RegisterComponent } from './pages/list/pages/register/register.component';
import { ListComponent } from './pages/list/list.component';
import { ItemListComponent } from './pages/list/components/item-list/item-list.component';
import { NewButtonComponent } from './pages/list/components/new-button/new-button.component';
import { AlertTextComponent } from './components/alert-text/alert-text.component';
import { NavfooterComponent } from './components/navfooter/navfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
    CardComponent,
    NameInputComponent,
    DescriptionTextareaComponent,
    AbstractTextareaComponent,
    SaveButtonComponent,
    DatatimeInputComponent,
    CategorySelectComponent,
    RegisterComponent,
    ListComponent,
    ItemListComponent,
    NewButtonComponent,
    AlertTextComponent,
    NavfooterComponent
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
