import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productUrl = 'http://localhost:3000/api/product';
  private _addProductUrl = 'http://localhost:3000/api/product';
  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<any>(this._productUrl);
  }

  getAddProduct() {
    return this.http.get<any>(this._addProductUrl);
  }
}
