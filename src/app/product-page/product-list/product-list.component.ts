import { Component,Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productItems: Array<{ name: string; price: number; image: string }> = [];
  @Output() removeItem = new EventEmitter<number>();
  
  onRemove(index: number) {
    this.removeItem.emit(index);
  }
}
