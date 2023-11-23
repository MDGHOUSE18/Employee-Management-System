import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee = {
    address: "", departmentName: "", email: "", employeeId: "", firstName: "", gender: "", lastName: "", phoneNumber: "", salary: "",
  }

  newemployee = {
    address: "", departmentName: "", email: "", employeeId: "", firstName: "", gender: "", lastName: "", phoneNumber: "", salary: "",
  }
  employees: Employee[] = [];
  
  
  constructor(private employeeService: EmployeeService) { 
    this.employeeService.getEmployees().subscribe((employees:any) => {
      console.log(employees);
			this.employees = employees;
			
		});
  }

  ngOnInit() { 
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
  addemployee(employee){
    console.log(employee);

    this.employeeService.addEmployee(employee)
    .subscribe(employees => this.employees = employees);

    this.employee = this.newemployee;
    alert(" Employee added Successfully")

  }
  

  
}
