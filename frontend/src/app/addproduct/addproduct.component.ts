import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProducts = [];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAddProduct()
    .subscribe(
      res => this.addProducts = res,
      err => console.log(err)
    );
  }

}
