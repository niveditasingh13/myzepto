import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FruitsveggiComponent } from './fruitsveggi/fruitsveggi.component';
import { PoojaessentialComponent } from './poojaessential/poojaessential.component';
import { PoojaItemsComponent } from './pooja-items/pooja-items.component';
import { FlowerComponent } from './flower/flower.component';
import { DiyadhoopComponent } from './diyadhoop/diyadhoop.component';
import { GiftitemComponent } from './giftitem/giftitem.component';
import { CupitemComponent } from './cupitem/cupitem.component';
import { FrameitemComponent } from './frameitem/frameitem.component';
import { FreshitemComponent } from './freshitem/freshitem.component';
import { LeafyvegeyComponent } from './leafyvegey/leafyvegey.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { LoginComponent } from './login/login.component';
import { ToysforkidsComponent } from './toysforkids/toysforkids.component';
import { TeddyComponent } from './teddy/teddy.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'fruitveggi', component:FruitsveggiComponent},
  {path:'pooja',component:PoojaItemsComponent},
  {path:'poojaitem',component:PoojaItemsComponent},
  {path:'poojaitemidol',component:PoojaItemsComponent},
  {path:'poojaitemflower',component:FlowerComponent},
  {path:'poojaitemdiya',component:DiyadhoopComponent},
  {path:'gift',component:GiftitemComponent},
  {path:'cup',component:CupitemComponent},
  {path:'frames',component:FrameitemComponent},
  {path:'fresh',component:FreshitemComponent},
  {path:'veg',component:FruitsveggiComponent},
  {path:'leafy',component:LeafyvegeyComponent},
  {path:'comingsoon',component:ComingsoonComponent},
  {path:'login',component:LoginComponent},
  {path:'toys',component:ToysforkidsComponent},
  {path:'teddy', component:TeddyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
