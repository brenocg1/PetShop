import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetCreateComponent } from './components/pet/pet-create/pet-create.component'
import { PetSearchComponent } from './components/pet/pet-search/pet-search.component' 
import { PetUpdateComponent } from './components/pet/pet-update/pet-update.component'
import { HousingsScreenComponent } from './components/housing/housings-screen/housings-screen.component'
import { PetOwnerCreateComponent } from './components/petOwner/pet-owner-create/pet-owner-create.component'

const routes: Routes = [
  { path: 'registerPet', component: PetCreateComponent },
  { path: '', component: PetCreateComponent },
  { path: 'housings', component: HousingsScreenComponent },
  { path: 'searchPet', component: PetSearchComponent },
  { path: 'updatePet/:id', component: PetUpdateComponent },
  { path: 'createPetOwner', component: PetOwnerCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
