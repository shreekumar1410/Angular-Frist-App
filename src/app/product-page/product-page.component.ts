import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products: Array<{ name: string; price: number; image: string }> = [
    // { name: 'Product 1', price: 100, image: 'https://picsum.photos/200/300' },
    // { name: 'Product 2', price: 200, image: 'https://picsum.photos/200/300' },
    // { name: 'Product 3', price: 200, image: 'https://picsum.photos/200/300' },
    // { name: 'Product 4', price: 300, image: 'https://picsum.photos/200/300' }
  ];

  onProductAdd(newProduct :any) { 
    this.products.push(newProduct);
   }
    onProductRemove(index : number) { 
    this.products.splice(index, 1);
   }

}