import { Component, OnInit } from '@angular/core';
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  { id: 1, name: 'Zepto Smartphone', price: 399.99, imageUrl: '../../assets/smartphone.jfif' },
  { id: 2, name: 'Zepto Laptop', price: 899.99, imageUrl: '../../assets/laptop.jfif' },
  { id: 3, name: 'Zepto Smartwatch', price: 199.99, imageUrl: '../../assets/smartwatch.webp' },
  { id: 4, name: 'Zepto Headphones', price: 99.99, imageUrl: '../../assets/hp.jfif' },
];

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent  implements OnInit {
  
  
  displayProducts():any {
    const productList = document.getElementById('product-list');
    
    if (productList) {
        products.forEach(product => {
            const productCard = `
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <img src="${product.imageUrl}" class="card-img-top" height="200px" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">Rs.${product.price.toFixed(2)}</p>
                            <a href="#" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += productCard;
        });
    }
  }

  public ngOnInit(): void
  {
    // now you can access to the itemId field and do what you need
    this.displayProducts();
  }
}






