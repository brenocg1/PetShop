import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetCreateComponent } from './components/pet/pet-create/pet-create.component'
import { PetSearchComponent } from './components/pet/pet-search/pet-search.component' 


const routes: Routes = [
  { path: 'registerPet', component: PetCreateComponent },
  { path: 'searchPet', component: PetSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
