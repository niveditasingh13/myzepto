import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FruitsveggiComponent } from './fruitsveggi/fruitsveggi.component';
import { PoojaessentialComponent } from './poojaessential/poojaessential.component';
import { PoojaItemsComponent } from './pooja-items/pooja-items.component';
import { DiyadhoopComponent } from './diyadhoop/diyadhoop.component';
import { FlowerComponent } from './flower/flower.component';
import { GiftitemComponent } from './giftitem/giftitem.component';
import { CupitemComponent } from './cupitem/cupitem.component';
import { FrameitemComponent } from './frameitem/frameitem.component';
import { FreshitemComponent } from './freshitem/freshitem.component';
import { LeafyvegeyComponent } from './leafyvegey/leafyvegey.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ToysforkidsComponent } from './toysforkids/toysforkids.component';
import { TeddyComponent } from './teddy/teddy.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FruitsveggiComponent,
    PoojaessentialComponent,
    PoojaItemsComponent,
    DiyadhoopComponent,
    FlowerComponent,
    GiftitemComponent,
    CupitemComponent,
    FrameitemComponent,
    FreshitemComponent,
    LeafyvegeyComponent,
    ComingsoonComponent,
    LoginComponent,
    ToysforkidsComponent,
    TeddyComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
