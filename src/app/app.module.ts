import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
