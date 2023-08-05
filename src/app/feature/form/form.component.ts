import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newCarForm: FormGroup;
  forbiddenModels= ['Multipla'];

  ngOnInit(){
    this.newCarForm = new FormGroup({
      'vendor': new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      'model': new FormControl(null, [Validators.required, this.forbiddenCarModels.bind(this)]),
      'year': new FormControl(2023)
    });
  }

  onSubmit(){
    console.log(this.newCarForm);
  }

  forbiddenCarModels(control: FormControl): {[s: string]: boolean}|null {
    if (this.forbiddenModels.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }
    return null;
  }

}
