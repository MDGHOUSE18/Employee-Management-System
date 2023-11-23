import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/services/department';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {
  department = {
    id:"",name:"",head:""
  }
  departments: Department[] = [];
  id: number;
  private sub: any;
  constructor(private departmentService: DepartmentService, private route: ActivatedRoute) { 
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.departmentService.getDepartment(this.id).subscribe((department: any) => {
      this.department = department;
    });
  }

  ngOnInit() {
  }
  updateDepartment(department) {
    console.log(department);
  
    this.departmentService.updateDepartment(department).subscribe((department: any) => {
      this.department = department;
    });
  }
}
