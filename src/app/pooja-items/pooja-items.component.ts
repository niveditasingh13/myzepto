import { Component } from '@angular/core';

@Component({
  selector: 'app-pooja-items',
  templateUrl: './pooja-items.component.html',
  styleUrls: ['./pooja-items.component.css']
})
export class PoojaItemsComponent {
  changeText(id:string) {
    const b = <HTMLElement>document.querySelector(id);
    b.innerHTML = 'added to cart';
    b.style.backgroundColor = '#90EE90'
 }
}
