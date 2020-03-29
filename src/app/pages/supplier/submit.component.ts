import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  // template: '<input [(ngModel)]="name" type = "text"> {{name}}',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit(): void {
  }

}
