import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  selectedFile = null;

  product : Product = {
    title: '',
    type: ''
  }

  constructor(private http: HttpClient, private productService: ProductService) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }

  onUpload() {
    // this.http.post('')
  }

  submit() {
    this.productService.createProduct(this.product)
      .subscribe(product => console.log(product));
  }
}
