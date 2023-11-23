import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Employee } from '../../services/employee';
import { EmployeeService } from '../../services/employee.service';
import { Department } from 'src/app/services/department';
import { DepartmentService } from 'src/app/services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public employees: Employee[];
  public departments: Department[];
  

  constructor(private employeeService: EmployeeService,private departmentService:DepartmentService,private router: Router) { }
  
  ngOnInit() {
    this.getEmployees();
    this.getDepartments();
    
  }
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  deleteEmployee(id: number): void {
    console.log('Delete employee:', id);
    this.employeeService.deleteEmployee(id).subscribe(
      (result: any) => {
        this.employees = result;
        
        // this.loadEmployees(); // Refresh the employee list after deletion
      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }
  public getDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (response: Department[]) => {
        this.departments = response;
        console.log(this.departments);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  deleteDepartment(id: number): void {
    console.log('Delete department:', id);
    this.departmentService.deleteDepartment(id).subscribe(
      (result: any) => {
        this.departments = result;
        
        // this.loadEmployees(); // Refresh the employee list after deletion
      },
      (error) => {
        console.error('Error deleting department:', error);
      }
    );
  }
  redirectToUpdateEmployee(id:number): void {
    console.log(id);
    this.router.navigate(['/employees/'+id]);
  }
  redirectToUpdateDepartment(id:number): void {
    console.log(id);
    this.router.navigate(['/departments/'+id]);
  }
}
