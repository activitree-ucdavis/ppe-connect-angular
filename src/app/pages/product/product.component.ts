import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  selectedFile = null;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  onUpload(){
    // this.http.post('')
  }
}
