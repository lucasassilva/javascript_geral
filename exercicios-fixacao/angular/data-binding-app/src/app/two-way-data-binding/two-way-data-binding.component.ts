import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  firstName: string = "Lucas";
  lastName: string = "Alves";


  client = {
    firstName: "john",
    lastName: "Mack",
    address: "",
    age: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
