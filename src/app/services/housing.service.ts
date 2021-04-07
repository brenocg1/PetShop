import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Housings } from '../Models/housings';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getHousings():Observable<Housings[]>{
    return this.http.get<Housings[]>(environment.APIUrl + "api/Housing/GetAllHousings");
  }

}
