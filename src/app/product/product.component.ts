import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // recieve data from parent
  @ Input() productName: string;
  // emit data to parent
  @ Output() productClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.productName = 'First Product';
  }

  onClicked() {
    this.productClicked.emit();
  }
}
