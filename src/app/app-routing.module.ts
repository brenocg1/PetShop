import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetCreateComponent } from './components/pet/pet-create/pet-create.component'

const routes: Routes = [
  { path: 'registerPet', component: PetCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
