import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiResponse } from '../Interface/api-response';
import { componentTypeModel } from '../Interface/component-type-model';


@Injectable({
  providedIn: 'root'
})
export class ComponentTypeApi {

  private apiUrl = 'http://localhost:88/api/componenttype/';

  constructor(private http: HttpClient) {}

  getComponentTypes(activeOnly:boolean): Observable<apiResponse> {
    return this.http.get<apiResponse>(`${this.apiUrl}getAll/${activeOnly}`);
  }

  getComponentTypeById(id: number,activeOnly:boolean): Observable<apiResponse> {
    return this.http.get<apiResponse>(`${this.apiUrl}getById/${id}/${activeOnly}`);
  }

  addComponentType(componentType: componentTypeModel): Observable<componentTypeModel> {
  return this.http.post<componentTypeModel>(
    `${this.apiUrl}add`,
    componentType
  );
}

deleteComponentType(id: number): Observable<void> {
  return this.http.delete<void>(
    `${this.apiUrl}delete/${id}`
  );
}

updateComponentType(componentType: componentTypeModel): Observable<componentTypeModel> {
  return this.http.put<componentTypeModel>(
    `${this.apiUrl}update`,
    componentType
  );
}

}