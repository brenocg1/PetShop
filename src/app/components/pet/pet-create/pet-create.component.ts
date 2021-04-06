import { Component, OnInit } from '@angular/core';
import { RegisterPetRequest } from 'src/api.requests';
import { Pet } from 'src/app/Models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {

  constructor(private petService:PetService) { }

  registerPetRequest!:RegisterPetRequest;
  animals!:Pet[];
  
  ngOnInit(): void {
    this.registerPetRequest = {
      name: "",
      reason: "",
      ownerName: "",
      ownerAddress: "",
      ownerPhoneNumber: "",
      healthStatus: "",
    }

    this.loadAnimals();
  }

  loadAnimals() {
    this.petService.getPets().subscribe(result => {
      this.animals = result;
    });
  }

  deleteAnimal(id: number){
    console.log(id);
  }

  saveAnimal() {
  }

  resetFields(){
    this.registerPetRequest = {
      name: "",
      reason: "",
      ownerName: "",
      ownerAddress: "",
      ownerPhoneNumber: "",
      healthStatus: "",
    }
  }
}
