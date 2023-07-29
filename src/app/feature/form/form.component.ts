import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('f') addCarForm: NgForm;

  onSubmit() {
    console.log("Submit pressed!");
    console.log(this.addCarForm.valid);
  }

  onReset(){
    console.log("Reset - Clear pressed!");
  }
}
