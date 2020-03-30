import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  // template: '<input [(ngModel)]="name" type = "text"> {{name}}',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  public supplier: Supplier = { name: '', address: '', contactInfo: '', description: ''};

  constructor(private supplierService: SupplierService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.supplierService.createSupplier(this.supplier)
      .subscribe(supplier => console.log(supplier));
  }

}
