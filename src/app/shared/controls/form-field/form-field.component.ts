import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormFieldComponent {

  @Input() label!: string;
  @Input() required!: boolean;
  @Input() control!: AbstractControl;
  @Input() patternError!: string;
  @Input() isLoadingIcon!: boolean;

  constructor(private fb: FormBuilder){}

  hasError(): boolean{
    // console.log(this.control);
    return this.control && this.control.invalid && this.control.touched;
  }

  // get errorKey() {
  //   // console.log(this.control);
  //   return this.control && this.control.errors && Object.keys(this.control.errors)[0];
  // }
}
