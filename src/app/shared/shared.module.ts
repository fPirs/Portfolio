import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavyComponent } from './wavy/wavy.component';
import { MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    WavyComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule
    
  ],

  exports: [
    WavyComponent,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule  
],

})
export class SharedModule { }
