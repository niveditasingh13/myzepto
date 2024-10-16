import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my_zepto';
  
  placeholders: string[] = [
    'Search "milk"',
    'Search "bread"',
    'Search "sugar"',
    'Search "butter"',
    'Search "paneer"',
    'Search "chocolate"',
    'Search "curd"',
    'Search "rice"',
    'Search "egg"',
    'Search "chips"'
  ];
 
    currentPlaceholder: string = this.placeholders[0];
    placeholderIndex: number = 0;
  
    ngOnInit(): void {
      this.startPlaceholderAnimation();
    }
   
    startPlaceholderAnimation(): void {
      setInterval(() => {
        this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholders.length;
        this.currentPlaceholder = this.placeholders[this.placeholderIndex];
      }, 2000); // Change placeholder every 2 seconds
    }
  }
  
  

