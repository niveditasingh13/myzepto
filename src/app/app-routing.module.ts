import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FruitsveggiComponent } from './fruitsveggi/fruitsveggi.component';
import { PoojaessentialComponent } from './poojaessential/poojaessential.component';
import { PoojaItemsComponent } from './pooja-items/pooja-items.component';
import { FlowerComponent } from './flower/flower.component';
import { DiyadhoopComponent } from './diyadhoop/diyadhoop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'fruitveggi', component:FruitsveggiComponent},
  {path:'pooja',component:PoojaessentialComponent},
  {path:'poojaitem',component:PoojaItemsComponent},
  {path:'poojaitemidol',component:PoojaItemsComponent},
  {path:'poojaitemflower',component:FlowerComponent},
  {path:'poojaitemdiya',component:DiyadhoopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
