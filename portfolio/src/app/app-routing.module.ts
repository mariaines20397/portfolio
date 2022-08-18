import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  
 /* {
  path:'',
  loadChildren:()=> import('./component/home/home.module').then((m)=>m.HomeModule)
  },*/
  {
  path:'/contact',
  loadChildren:()=> import('./component/contact/contact.module').then((m)=>m.ContactModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
