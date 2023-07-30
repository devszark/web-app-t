import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newCarForm: FormGroup;

  ngOnInit(){
    this.newCarForm = new FormGroup({
      'vendor': new FormControl(null),
      'model': new FormControl(null),
      'year': new FormControl(2023)
    });
  }
}
