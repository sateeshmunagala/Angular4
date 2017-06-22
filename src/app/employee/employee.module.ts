import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EmployeeComponent } from './employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeService} from './employee.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [EmployeeComponent]
})
export class EmployeeModule { }
