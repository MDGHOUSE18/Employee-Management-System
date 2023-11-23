import { Component, OnInit } from "@angular/core";
import { Department } from "src/app/services/department";
import { DepartmentService } from "src/app/services/department.service";

@Component({
  selector: "app-add-department",
  templateUrl: "./add-department.component.html",
  styleUrls: ["./add-department.component.css"],
})
export class AddDepartmentComponent implements OnInit {
  departments: Department[] = [];
  department={id:"",name:"",head:""};
  newdepartment={id:"",name:"",head:""};
  constructor(private departmentService: DepartmentService) {
    this.departmentService.getDepartments().subscribe((departments: any) => {
      console.log(departments);
      this.departments = departments;
    });
  }

  ngOnInit() {
    this.departmentService
      .getDepartments()
      .subscribe((departments) => (this.departments = departments));
  }
  adddepartment(department) {
    console.log(department);
    this.departmentService
      .addDepartment(department)
      .subscribe((departments) => (this.departments = departments));
    this.department = this.newdepartment;
    alert("Department added Successfully");
  }
}
