import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePetOwnerRequest } from 'src/api.requests';
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

  createPetOwner(request: CreatePetOwnerRequest){
    const url = `${environment.APIUrl}api/PetOwner/CreatePetOwner`
    return this.http.post(url, request);
  }

  deletePetOwner(id: number){
    const url = `${environment.APIUrl}api/PetOwner/DeletePetOwner?id=${id}`
    return this.http.delete(url);
  }
}
