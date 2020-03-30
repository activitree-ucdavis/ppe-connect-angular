import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/hospital';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {

  public hospital: Hospital = { 
    name: '', 
    address: {
      line1: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    }, 
    contactInfo: {}, 
    description: ''
  };

  constructor(private hospitalService: HospitalService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.hospitalService.createHospital(this.hospital)
      .subscribe(hospital => console.log(hospital));
  }

}

