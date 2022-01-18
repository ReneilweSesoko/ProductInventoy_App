import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product = {
    _id: '', 
    name: '',
    description: '',
    sku: '',
    price: 0,
    stock: 0
  }

  submitted = false;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(f: NgForm){

    const prod = {
      name: this.product.name,
      description: this.product.description,
      sku: this.product.sku,
      price: this.product.price,
      stock: this.product.stock,
    };

    this.productService.create(prod).subscribe(res=>{
      console.log(res);
      this.submitted = true;
    })
  }

  newProduct(){
    this.submitted = false;
    this.product = {
      _id: '', 
      name: '',
      description: '',
      sku: '',
      price: 0,
      stock: 0
    }
  }
}
