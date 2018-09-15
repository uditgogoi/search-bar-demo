import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  
  MatIconModule, MatInputModule,
  MatAutocompleteModule,MatChipsModule,
  MatFormFieldModule

  
} from '@angular/material';
import { HomePageComponent } from './component/home-page/home-page.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
     MatIconModule, MatInputModule,
    MatAutocompleteModule,
   MatChipsModule,
    MatFormFieldModule

    
    
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
