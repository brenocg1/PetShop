import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterPetRequest, UpdatePetRequest } from 'src/api.requests';
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
  registerPetRequest!:UpdatePetRequest;

  
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.registerPetRequest = {
      petId: Number(id),
      name: "",
      healthCondition: "",
      reasonForHospitalization: "",
    }
    this.loadInfo();
    this.loadAnimals();
  }

  loadInfo(){
    const id = this.route.snapshot.paramMap.get('id');
    this.petService.getPetById(Number(id)).subscribe((result) => {
      this.registerPetRequest.name = result.Name;
      this.registerPetRequest.healthCondition = result.HealthCondition;
      this.registerPetRequest.reasonForHospitalization = result.ReasonForHospitalization;
    });
  }

  updateAnimal(){
    if(this.registerPetRequest.healthCondition == ""){
      alert("Selecione o estado de saúde do animal");
      return;
    }

    this.petService.updatePet(this.registerPetRequest).subscribe(() => {
      alert("Atualizado com sucesso");
      this.loadAnimals();
    });
  }

  deleteAnimal(id: number){
    console.log(id);
    this.petService.deletePet(id).subscribe(() => {
      this.loadAnimals();
    });
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
