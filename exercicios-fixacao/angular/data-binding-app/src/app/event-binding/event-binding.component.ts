import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName: String = "My button";
  i: number = 0;
  spinnerMode: any = "determinate";
  btnEnable: boolean = true;
  selectDisabled: boolean = false;
  selectedOption: number = 1;

  inputName: string = "john";

  constructor() { }

  ngOnInit(): void {}


  save() {
    console.log("Click");
  }

  inc() {
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times";
  }

   disable() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }

  cbChange(event: any) {
    this.selectDisabled = event.checked;
  }

  selectionChange(event: any) {
      this.selectedOption = event.value;
  }

  inputEvent(event: any) {
    this.inputName = event.target.value;
  }

}
