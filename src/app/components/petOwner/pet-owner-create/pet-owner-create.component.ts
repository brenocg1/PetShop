import { Component, OnInit } from '@angular/core';
import { CreatePetOwnerRequest } from 'src/api.requests';
import { PetOwner } from 'src/app/Models/petOwner';
import { PetOwnerService } from 'src/app/services/pet-owner.service';

@Component({
  selector: 'app-pet-owner-create',
  templateUrl: './pet-owner-create.component.html',
  styleUrls: ['./pet-owner-create.component.css']
})
export class PetOwnerCreateComponent implements OnInit {

  constructor(private ownerService:PetOwnerService) { }

  request!: CreatePetOwnerRequest;

  owners!: PetOwner[];

  ngOnInit(): void {
    this.loadOwners();

    this.request = {
      name: "",
      phoneNumber: "",
      address: ""
    }
  }

  deleteOwner(id: number){
    this.ownerService.deletePetOwner(id).subscribe(() => {
      this.loadOwners();
    });
  }

  loadOwners(){
    this.ownerService.getPetOwners().subscribe((result) => {
      this.owners = result;
    });
  }

  saveOwner(){
    if(this.request.name == "" ||
    this.request.address == "" ||
    this.request.phoneNumber == ""){
      alert("preencha todos os campos");
    }
    else{
      this.ownerService.createPetOwner(this.request).subscribe(() => { this.loadOwners(); });
    }
  }

  resetFields(){
    this.request = {
      name: "",
      phoneNumber: "",
      address: ""
    }
  }
}
