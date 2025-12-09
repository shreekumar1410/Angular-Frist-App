import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  @Output() productAdded = new EventEmitter<{ name: string; price: number; image: string }>();
  defaultimg = 'data:image/png;base64,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'
  product = {
    name: '',
    price: 0,
    image: ''};

  onadd(){

    if (!this.product.name || this.product.price <= 0) {
      alert('Please provide valid product name and price.');
      return;
    }

    if (!this.product.image) {
      this.product.image = this.defaultimg;
    }
    
    const newProduct = {
      name: this.product.name,
      price: this.product.price,
      image: this.product.image
    }

    this.productAdded.emit(newProduct);
    this.product = { name: '', price: 0, image: '' }; 
  }
}
