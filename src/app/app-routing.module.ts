import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AddressComponent } from './address/address.component';
import { IdentifyComponent } from './identify/identify.component';
const routes: Routes = [
  {
    path:'',
    component:ClientComponent
  },
  {
    path:'address',
    component:AddressComponent
  },
  {
    path:'identify',
    component:IdentifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
