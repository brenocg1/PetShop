import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pet } from '../Models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  readonly APIUrl:string = "";
  readonly apiMock:string = "https://api.mocki.io/v1/3f0c57f3";

  constructor(private http:HttpClient){ }

  //Inserir dados do pet (Informar em que alojamento ele está)
  //Editar dados do pet
  //Delete Pet
  //Consulta de Pet

  getPets():Observable<Pet[]>{
    return this.http.get<Pet[]>(this.apiMock);
  }
}
