import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-demo',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reactive-form-demo.component.html',
  styleUrl: './reactive-form-demo.component.css'
})
export class ReactiveFormDemoComponent {

  // userForm = new FormGroup({
  //   userName: new FormControl(''),
  //   email: new FormControl(''),
  //   fullName: new FormGroup({
  //     firstName: new FormControl(''),
  //     lastName: new FormControl('')
  //   })
  // });

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: [''],
      fullName: this.formBuilder.group({
        firstName: [''],
        lastName: ['']
      }),
      dynamicControls: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }

  get userName() { return this.userForm.get('userName'); }

  get dynamicControls() {
    return this.userForm.get('dynamicControls') as FormArray; }


  addDynamicControl() {
    this.dynamicControls.push(this.formBuilder.control(''));
  }

  clear(){
    this.userForm.get('userName')?.setValue('');
    this.userForm.get('email')?.setValue('');
    this.userForm.get('fullName')?.get('firstName')?.setValue('');
    this.userForm.get('fullName')?.get('lastName')?.setValue('');
    //this.userForm.reset();
  }

  onSubmit(){ console.log(this.userForm.value) }

}
