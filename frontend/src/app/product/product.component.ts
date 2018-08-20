import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // private _addtoacart = 'http://localhost:3000/api/login';
  products = [];
  loginUserData = {};
  constructor(private _productService: ProductService, private _auth: AuthService) { }

  ngOnInit() {
    this._productService.getProduct()
    .subscribe(
      res => this.products = res,
      err => console.log(err)
    );
  }

  addtocart() {
    this._auth.addProduct(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

  deletecart() {
    this._auth.deleteProduct(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
