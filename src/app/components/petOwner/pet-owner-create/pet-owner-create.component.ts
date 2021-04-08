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
    if(confirm("Essa ação irá excluir o dono e todos os animais a ele cadastrados, consequentemente liberando os alojamentos em que eles estão")){
      this.ownerService.deletePetOwner(id).subscribe(() => {
        this.loadOwners();
      });
    }
    else{
      return;
    }
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
      this.ownerService.createPetOwner(this.request).subscribe(() => { this.loadOwners(); this.resetFields(); });
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
