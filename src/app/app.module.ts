import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TableComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, CdkTableModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
