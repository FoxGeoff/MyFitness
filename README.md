# MyFitness

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Work log

## Binding

* String interperlation: {{}}
* Event binding: `<button (click ="myClick()")>test</button>`
* Property binding: every html element has a DOM element = JS Object with properties  

      `[disabled] = "isDisabled"` 

* Two way binding: `<input type="text" [(ngModel)] = "productName"></input>`
* NOTE: this requires: `import {FormsModule} from '@angular/forms';`

## Directives

* Structural Directives:
* `<li *ngFor= "let product of products"> {{product.name}} </li>`
* `<button *ngIf ="!isDisabled">Test</button>`

## Custom Property and Event Binding

## @Input()

* Child Component => Parent Component:
* On the parent component:
* `<app-product *ngFor="let prod of products" [productName]= "prod.name"> </app-product>`
* Child (recieve data): `@input() productName: string;`

## @Output()

* Parent Component => Child Component:
* Child: `<button (clicked) = "onClicked()">Raise Event</button>`
* Child (output data): 'import { EventEmitter, Output }`
* Child (emit event from child out to parent): `@Output() prodctClick = new EventEmitter();`
* Parent: `onClicked() { this.productClicked.emit(); }`
* Parent: `<app-product (productClicked) = "onRemovalProduct(product) *ngFor="let product of products"></app-product>`
* Child: `onRemoveProduct(productName:string){ this.products = this.products.filter(p => p !== productName); }`
