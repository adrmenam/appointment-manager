import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { AppointmentsComponent } from './appointments/appointments.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { PatientsComponent } from './patients/patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    CreateAppointmentComponent,
    EditAppointmentComponent,
    PatientsComponent,
    CreatePatientComponent,
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
