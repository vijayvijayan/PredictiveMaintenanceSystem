
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackageDamageResponseDTO } from '../Interface/package-damage-response-DTO';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PackageInspectionApi {

  private apiUrl = environment.apiUrl;//'https://localhost:YOUR_PORT/api/packageInspection/detectDamage';

  constructor(private http: HttpClient) {}

  detectDamage(image: File): Observable<PackageDamageResponseDTO> {

    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<PackageDamageResponseDTO>(
      `${this.apiUrl}packageInspection/detectDamage`,
      formData
    );
  }
}
