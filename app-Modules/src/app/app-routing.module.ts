import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PincodeComponent } from './pincode/pincode.component';

const routes: Routes = [
  {path:'pincod',component:PincodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
