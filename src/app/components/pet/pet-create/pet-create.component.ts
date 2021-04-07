import { Component, OnInit } from '@angular/core';
import { RegisterPetRequest } from 'src/api.requests';
import { Pet } from 'src/app/Models/pet';
import { PetOwner } from 'src/app/Models/petOwner';
import { PetOwnerService } from 'src/app/services/pet-owner.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {

  constructor(private petService:PetService,
    private petOwnerService:PetOwnerService) { }

  registerPetRequest!:RegisterPetRequest;
  animals!:Pet[];
  petOwners!:PetOwner[];
  
  ngOnInit(): void {
    
    this.loadAnimals();
    this.loadOwners();

    this.registerPetRequest = {
      name: "",
      healthCondition: "",
      reasonForHospitalization: "",
      petOwnerId: -1,
    }
  }

  loadOwners() {
    this.petOwnerService.getPetOwners().subscribe((result) => {
      this.petOwners = result;
    });
  }

  loadAnimals() {
    this.petService.getPets().subscribe(result => {
      this.animals = result;
    });
  }

  deleteAnimal(id: number){
    console.log(id);
    this.petService.deletePet(id).subscribe(() => {
      this.loadAnimals();
    });
  }

  saveAnimal() {
    if(!this.validateFields()){
      alert("Preencha todos os campos");
    }else{
      this.petService.createPet(this.registerPetRequest).subscribe((result) => {
        this.loadAnimals();
        if(result > 1){
          alert(`Animal alocado no alojamento numero ${result}`);
        }else{
          alert("Não há alojamentos livres");
        }
      });
    }
  }

  validateFields(): boolean {
    if(this.registerPetRequest.name == "" ||
      this.registerPetRequest.healthCondition == "" ||
      this.registerPetRequest.petOwnerId == -1 ||
      this.registerPetRequest.reasonForHospitalization == ""){
        return false
    }
    return true;
  }

  resetFields(){
    this.registerPetRequest = {
      name: "",
      healthCondition: "",
      reasonForHospitalization: "",
      petOwnerId: -1,
    }
  }
}
