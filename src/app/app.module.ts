import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';




@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBottomSheetModule,
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
