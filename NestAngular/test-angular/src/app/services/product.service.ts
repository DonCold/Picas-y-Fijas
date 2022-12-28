import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Product } from '../interfaces/Product'

interface ProductResponseArr {
  data: Product[],
  status: Boolean
}

interface ProductResponse {
  data: Product,
  status: Boolean
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  BASE_URL: string = 'http://localhost:3000';

  getProducts(): Observable<ProductResponseArr> {
    return this.http.get<ProductResponseArr>(`${this.BASE_URL}/product`)
  }

  getProduct(id: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.BASE_URL}/product/${id}`)
  }

  createProduct(product: Product): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(`${this.BASE_URL}/product`, product)
  }

  deleteProduct(id: string): Observable<ProductResponse> {
    return this.http.delete<ProductResponse>(`${this.BASE_URL}/product/${id}`)
  }

  updateProduct(id: string, newProduct: Product): Observable<ProductResponse> {
    return this.http.put<ProductResponse>(`${this.BASE_URL}/product/${id}`, newProduct)
  }
}
