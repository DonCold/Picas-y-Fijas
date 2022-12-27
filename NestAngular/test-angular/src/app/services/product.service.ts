import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Product } from '../interfaces/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  BASE_URL: string = 'http://localhost:3000';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/product`)
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/product/${id}`)
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/product`, product)
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.BASE_URL}/product/${id}`)
  }

  updateProduct(id: string, newProduct: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/product/${id}`, newProduct)
  }
}
