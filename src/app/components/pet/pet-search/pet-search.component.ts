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
    this.loadAnimals();

    this.searchPetRequest = {
      name: "",
    };
  }

  searchPet(){
    if(this.searchPetRequest.name == ""){
      alert("Preencha o nome que deseja pesquisar");
      return;
    }else{
      this.petService.searchPet(this.searchPetRequest).subscribe((result) => {
        this.animals = result;
      });
    }
  }

  editarAnimal(id: number){
    this.router.navigate([`updatePet/${id}`]);
  }

  deleteAnimal(id: number){
    this.petService.deletePet(id).subscribe(() => {
      this.loadAnimals();
    });
  }

  loadAnimals() {
    this.petService.getPets().subscribe(result => {
      this.animals = result;
    });
  }
}
