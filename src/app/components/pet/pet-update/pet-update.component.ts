import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterPetRequest } from 'src/api.requests';
import { Pet } from 'src/app/Models/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {

  constructor(
    private petService:PetService,
    private router:Router,
    private route:ActivatedRoute) { }

  animals!:Pet[];
  registerPetRequest!:RegisterPetRequest;

  

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
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  updateAnimal(){

  }

  cancel(){
    this.router.navigate(["searchPet"]);
  }

  loadAnimals() {
    this.petService.getPets().subscribe(result => {
      this.animals = result;
    });
  }
}
