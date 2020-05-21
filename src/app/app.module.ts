import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { GuruComponent } from './guru/guru.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GuruComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatDialogModule,
    DragDropModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: Window, useValue: window},Title, Meta
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor( router: Router) {
  }
}