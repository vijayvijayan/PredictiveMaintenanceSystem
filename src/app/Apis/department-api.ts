import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiResponse } from '../Interface/api-response';
import { departmentModel } from '../Interface';



@Injectable({
  providedIn: 'root'
})
export class DepartmentApi {

  private apiUrl = 'http://localhost:88/api/department/';

  constructor(private http: HttpClient) {}

  getDepartments(activeOnly:boolean): Observable<apiResponse> {
    return this.http.get<apiResponse>(`${this.apiUrl}getAll/${activeOnly}`);
  }

  getDepartmentById(id: number,activeOnly:boolean): Observable<apiResponse> {
    return this.http.get<apiResponse>(`${this.apiUrl}getById/${id}/${activeOnly}`);
  }

  addDepartment(department: departmentModel): Observable<departmentModel> {
  return this.http.post<departmentModel>(
    `${this.apiUrl}add`,
    department
  );
}

deleteDepartment(id: number): Observable<void> {
  return this.http.delete<void>(
    `${this.apiUrl}delete/${id}`
  );
}

updateDepartment(department: departmentModel): Observable<departmentModel> {
  return this.http.put<departmentModel>(
    `${this.apiUrl}update`,
    department
  );
}

}