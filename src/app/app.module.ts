import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { FormFieldModule } from './shared/controls/form-field/form-field.module';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';
import { SublevelMenuComponent } from './shared/sidenav/sublevel-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SublevelMenuComponent,
  ],
  imports: [
    CommonModule, //sidebar
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ButtonModule,
    FormFieldModule,
    InputTextModule,
    AutoCompleteModule,
    DropdownModule,
    RouterModule,  //sidebar
    MegaMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
