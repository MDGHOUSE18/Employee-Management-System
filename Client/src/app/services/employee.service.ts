import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }
  public getEmployees(){
    return this.http.get<any>(`${this.apiServerUrl}/employees/all`);
  }
  getEmployee(id:Number){  
    return this.http.get(`${this.apiServerUrl}/employees/`+id);  
 }
  public addEmployee(employee: any) {
    return this.http.post<any>(`${this.apiServerUrl}/employees/add`, employee,this.httpOptions);
  }

  public updateEmployee(employee: any) {
    return this.http.put<any>(`${this.apiServerUrl}/employees/update`, employee, this.httpOptions);
  }

  public deleteEmployee(employeeId: number) {
    return this.http.delete<any>(`${this.apiServerUrl}/employees/delete/${employeeId}`);
  }
}
