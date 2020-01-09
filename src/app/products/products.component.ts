import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productName: string;
  isDisabled = true;
  products = ['A book', 'A tree'];

  constructor() { }

  ngOnInit() {
    this.productName = 'A book';

    setTimeout( () => {
        this.productName = 'A 3 second tree';
        this.isDisabled = false;
    }, 3000);
  }

  onRemovedProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }

  addProducts() {
    this.products.push(this.productName);
  }
}
