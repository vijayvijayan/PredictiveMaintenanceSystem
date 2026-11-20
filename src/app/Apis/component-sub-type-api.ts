import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiResponse } from '../Interface/api-response';
import { componentSubTypeModel } from '../Interface';



@Injectable({
  providedIn: 'root'
})
export class ComponentSubTypeApi {

  private apiUrl = 'http://localhost:88/api/componentsubtype/';

  constructor(private http: HttpClient) {}

  getComponentSubTypes(activeOnly:boolean): Observable<apiResponse> {
    return this.http.get<apiResponse>(`${this.apiUrl}getAll/${activeOnly}`);
  }

  getComponentSubTypeById(id: number,activeOnly:boolean): Observable<apiResponse> {
    return this.http.get<apiResponse>(`${this.apiUrl}getById/${id}/${activeOnly}`);
  }

  addComponentSubType(componentSubType: componentSubTypeModel): Observable<componentSubTypeModel> {
  return this.http.post<componentSubTypeModel>(
    `${this.apiUrl}add`,
    componentSubType
  );
}

deleteComponentSubType(id: number): Observable<void> {
  return this.http.delete<void>(
    `${this.apiUrl}delete/${id}`
  );
}

updateComponentSubType(componentSubType: componentSubTypeModel): Observable<componentSubTypeModel> {
  return this.http.put<componentSubTypeModel>(
    `${this.apiUrl}update`,
    componentSubType
  );
}

}