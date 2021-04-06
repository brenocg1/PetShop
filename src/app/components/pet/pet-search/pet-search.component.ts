import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchPetRequest } from 'src/api.requests';
import { Pet } from 'src/app/Models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.css']
})
export class PetSearchComponent implements OnInit {

  constructor(
    private petService:PetService,
    private router:Router) { }

  animals!:Pet[];

  searchPetRequest!:SearchPetRequest;

  ngOnInit(): void {
    this.searchPetRequest = {
      name: "",
    };

    this.loadAnimals();
  }

  searchPet(){
    
  }

  editarAnimal(id: number){
    this.router.navigate([`updatePet/${id}`]);
  }

  deleteAnimal(id: number){
    console.log(id);
  }

  loadAnimals() {
    this.petService.getPets().subscribe(result => {
      this.animals = result;
    });
  }

}
