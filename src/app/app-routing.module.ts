import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetCreateComponent } from './components/pet/pet-create/pet-create.component'
import { PetSearchComponent } from './components/pet/pet-search/pet-search.component' 
import { PetUpdateComponent } from './components/pet/pet-update/pet-update.component'

const routes: Routes = [
  { path: 'registerPet', component: PetCreateComponent },
  { path: '', component: PetCreateComponent },
  { path: 'searchPet', component: PetSearchComponent },
  { path: 'updatePet/:id', component: PetUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
