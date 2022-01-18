import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products?: Product[];
  currentProduct: Product = {};
  currIndex = -1

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  //get all the products
  getProducts(): void{
    this.productService.getAll().subscribe(data=>{
      this.products = data;
      //this.products
      console.log(data);
    });
  }

  setActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currIndex = index;
  }

  //remove all the products
  removeAllProd(){
    this.productService.deleteAll().subscribe(res=>{
      console.log(res)
    });
  }

  removeById(_id: any){
    this.productService.delete(_id).subscribe(res=>{
      console.log(res);
      window.location.reload();
    
    })
  }

}
