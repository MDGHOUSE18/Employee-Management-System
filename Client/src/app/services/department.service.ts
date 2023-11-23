import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './department';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiServerUrl = environment.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }
  public getDepartments(){
    return this.http.get<any>(`${this.apiServerUrl}/departments/all`);
  }
  getDepartment(id:Number){  
    return this.http.get(`${this.apiServerUrl}/departments/`+id);  
 }
  public addDepartment(department: any) {
    return this.http.post<any>(`${this.apiServerUrl}/departments/add`, department,this.httpOptions);
  }

  public updateDepartment(department: any) {
    return this.http.put<any>(`${this.apiServerUrl}/departments/update`, department, this.httpOptions);
  }

  public deleteDepartment(id: number) {
    return this.http.delete<any>(`${this.apiServerUrl}/departments/delete/${id}`);
  }
}
