import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PetOwner } from '../Models/petOwner';

@Injectable({
  providedIn: 'root'
})
export class PetOwnerService {

  constructor(private http:HttpClient) { }

  getPetOwners():Observable<PetOwner[]>{
    return this.http.get<PetOwner[]>(environment.APIUrl + "api/PetOwner/GetAllPetOwners");
  }

}
