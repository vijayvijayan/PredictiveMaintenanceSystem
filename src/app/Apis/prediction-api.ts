
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { motorPredictionRequestDTO, motorPredictionResponseDTO } from '../Interface';
import { environment } from '../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class PredictionApi {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  predictMotorFailure(
    motorPredictionRequest: motorPredictionRequestDTO
  ): Observable<motorPredictionResponseDTO> {

    return this.http.post<motorPredictionResponseDTO>(
      `${this.apiUrl}prediction/predictMotorFailure`,
      motorPredictionRequest
    );
  }
}
