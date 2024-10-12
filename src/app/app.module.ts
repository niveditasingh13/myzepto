import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FruitsveggiComponent } from './fruitsveggi/fruitsveggi.component';
import { PoojaessentialComponent } from './poojaessential/poojaessential.component';
import { PoojaItemsComponent } from './pooja-items/pooja-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FruitsveggiComponent,
    PoojaessentialComponent,
    PoojaItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
