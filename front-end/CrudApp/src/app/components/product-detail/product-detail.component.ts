import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {


  @Input() viewMode = false;
  @Input() currentProduct: Product = {
    _id: '',
    name: '',
    description: '',
    sku: '',
    price: 0,
    stock: 0
  };
  message!: '';

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(!this.viewMode){
      this.message = ''
      this.getProduct(this.route.snapshot.params["_id"]);
    }
  }

  getProduct(_id: string): void {
    this.productService.getById(_id).subscribe(data=>{
      this.currentProduct = data;
      console.log(data)
    });
  }

  updateProduct(): void{
    this.productService.update(this.currentProduct._id, this.currentProduct).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/products']);
    });
  }

}
