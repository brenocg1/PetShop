import { Component, OnInit } from '@angular/core';
import { RegisterPetRequest } from 'src/api.requests';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {

  constructor() { }

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
  }

  saveAnimal() {

  }
}
