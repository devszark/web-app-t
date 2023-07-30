import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newCar: FormGroup;

  ngOnInit(){
    this.newCar = new FormGroup({});
  }
}
