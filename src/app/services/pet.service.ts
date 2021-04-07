import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pet } from '../Models/pet';
import { environment } from 'src/environments/environment';
import { RegisterPetRequest, SearchPetRequest, UpdatePetRequest } from 'src/api.requests';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  

  constructor(private http:HttpClient){ }

  //Inserir dados do pet (Informar em que alojamento ele está)
  //Editar dados do pet
  //Delete Pet
  //Consulta de Pet

  getPets():Observable<Pet[]>{
    return this.http.get<Pet[]>(environment.APIUrl + "api/Pet/GetAllPets");
  }

  getPetById(id: number):Observable<Pet>{
    const url = `${environment.APIUrl}api/Pet/GetPetById?id=${id}`
    return this.http.get<Pet>(url);
  }

  deletePet(id: number){
    const url = `${environment.APIUrl}api/Pet/DeletePetById?id=${id}`
    return this.http.delete(url);
  }

  createPet(request: RegisterPetRequest): Observable<number>{
    const url = `${environment.APIUrl}api/Pet/CreatePet`
    return this.http.post<number>(url, request);
  }

  searchPet(request: SearchPetRequest): Observable<Pet[]>{
    const url = `${environment.APIUrl}api/Pet/SearchPet?name=${request.name}`
    return this.http.get<Pet[]>(url);
  }

  updatePet(request: UpdatePetRequest) {
    const url = `${environment.APIUrl}api/Pet/UpdatePet`
    return this.http.put(url, request);
  }
}
