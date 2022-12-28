import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { ProductService } from '../../services/product.service'
import { Product } from '../../interfaces/Product'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageURL: '',
  };

  edit: boolean = false;

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (!params.id) return

    this.productService.getProduct(params.id).subscribe(
      res => {
        this.product = res.data;
        this.edit = true;
      },
      err => console.log(err)
    )
  }

  submitProduct() {
    this.productService.createProduct(this.product).subscribe(
      res => this.router.navigate(['/']),
      err => console.log(err)
    )
  }

  updateProduct() {
    this.product.createdAt;
    this.productService.updateProduct(this.product._id || '', this.product).subscribe(
      res => this.router.navigate(['/']),
      err => console.log(err)
    )
  }

}
