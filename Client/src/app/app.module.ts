import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { UpdateDepartmentComponent } from './components/update-department/update-department.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'add-department', component: AddDepartmentComponent },
  { path: 'employees/:id', component: UpdateEmployeeComponent },
  { path: 'departments/:id', component: UpdateDepartmentComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmployeeComponent,
    NavbarComponent,
    UpdateEmployeeComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
