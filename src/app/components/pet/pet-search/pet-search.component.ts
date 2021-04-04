import { Component, OnInit } from '@angular/core';
import { SearchPetRequest } from 'src/api.requests';
import { Pet } from 'src/app/Models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.css']
})
export class PetSearchComponent implements OnInit {

  constructor(private petService:PetService) { }

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

  deleteAnimal(id: number){
    console.log(id);
  }

  loadAnimals() {
    this.petService.getPets().subscribe(result => {
      this.animals = result;
    });
    console.log(this.animals);
  }

}
