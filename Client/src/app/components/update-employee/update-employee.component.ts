import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/services/employee';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee = {
    address: "",
    departmentName: "",
    email: "",
    employeeId: "",
    firstName: "",
    gender: "",
    lastName: "",
    phoneNumber: "",
    salary: "",
  };
  
  employees: Employee[] = [];
  
  id: number;
  private sub: any;
  
  public ngOnInit() {}
  
  public constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      });
    this.employeeService.getEmployee(this.id).subscribe((employee:any) => {
      this.employee = employee;
		});	
  }
  
  updateEmployee(employee) {
    console.log(employee);
  
    this.employeeService.updateEmployee(employee).subscribe((employee: any) => {
      this.employee = employee;
    });
  }

}
