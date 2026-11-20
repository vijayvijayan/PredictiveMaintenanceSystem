import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiResponse, LoginRequestDTO, RegisterRequestDTO } from '../Interface';
import { environment } from '../../environments/environment.development';




@Injectable({
  providedIn: 'root'
})
export class AuthApi {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
   registerUser(userData:RegisterRequestDTO): Observable<apiResponse> {
    return this.http.post<apiResponse>(
      `${this.apiUrl}auth/register`,
      userData
    );
  }

  loginUser(userCredentials:LoginRequestDTO): Observable<apiResponse> {
    return this.http.post<apiResponse>(
      `${this.apiUrl}auth/login`,
      userCredentials
    );
  }
}