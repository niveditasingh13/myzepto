import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  ngAfterViewInit() {
    const carousel = document.querySelector(".carousel") as HTMLElement;
    const arrowBtns = document.querySelectorAll(".wrapper i") as NodeListOf<HTMLElement>;
    const wrapper = document.querySelector(".wrapper") as HTMLElement;

    const firstCard = carousel.querySelector(".card") as HTMLElement;
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false;
    let startX: number;
    let startScrollLeft: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const dragStart = (e: MouseEvent): void => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e: MouseEvent): void => {
      if (!isDragging) return;

      const newScrollLeft = startScrollLeft - (e.pageX - startX);

      // Check if the new scroll position exceeds carousel boundaries
      if (newScrollLeft <= 0 || newScrollLeft >= (carousel.scrollWidth - carousel.offsetWidth)) {
        isDragging = false;
        return;
      }

      // Update the scroll position of the carousel
      carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = (): void => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const autoPlay = (): void => {
      if (window.innerWidth < 800) return;

      const totalCardWidth = carousel.scrollWidth;
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

      if (carousel.scrollLeft >= maxScrollLeft) return;

      // Autoplay the carousel every 2500ms
      timeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
      }, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const direction = btn.id === "left" ? -firstCardWidth : firstCardWidth;
        carousel.scrollLeft += direction;
      });
    });

    autoPlay(); // Start autoplay after initializing
  }


  
    
       
        
        

    
}
