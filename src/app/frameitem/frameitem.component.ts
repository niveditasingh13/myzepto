import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frameitem',
  templateUrl: './frameitem.component.html',
  styleUrls: ['./frameitem.component.css']
})

export class FrameitemComponent {
  changeText(id:string) {
    const b = <HTMLElement>document.querySelector(id);
    b.innerHTML = 'added to cart';
    b.style.backgroundColor = '#90EE90'
 }
}
