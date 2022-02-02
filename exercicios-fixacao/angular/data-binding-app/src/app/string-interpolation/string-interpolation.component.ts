import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {


  public firstname = "John";
  age = 100;


  person = {
    firstname: "John",
    lastname: "bro",
    age: 50,
    address: "Route 100"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
