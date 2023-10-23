import { Component } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup;
  showEducationDetails: boolean = false;
  showMarraigeDetails: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.minLength(13)]],
      cnic: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      education: this.fb.group({
        hssc: new FormControl(false),
        ssc: new FormControl(false),
      })
    });
  }

  onSubmit(){

  }
}
