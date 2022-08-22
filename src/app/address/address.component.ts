import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { emailValidator } from './email-validator.directive';
//import { MustMatch } from './must-match.validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { NgSelectModule } from '@ng-select/ng-select';
import { FormControl } from '@angular/forms';
import { Country } from '@angular-material-extensions/select-country';
import { Angulartics2Module } from 'angulartics2';
//import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
//import   { Angulartics1GoogleAnalytics } from 'angulartics';
//import { Angulartics2Module } from 'angulartics2';
import {Router} from '@angular/router'



interface Category {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  title = 'select-country';

  countryFormControl = new FormControl();
  countryFormGroup: FormGroup;

  registerForm: FormGroup;
  submitted = false;

  categoriesControl = new FormControl([]);

  constructor(
  //  angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private formBuilder: FormBuilder,
    private router:Router,)
    {
   //   angulartics2GoogleAnalytics.startTracking();
  }

  ngOnInit(): void {

    this.countryFormGroup = this.formBuilder.group({
      country: []
    });
    this.countryFormGroup.get('country').valueChanges
    .subscribe(country => console
    .log('this.countryFormGroup.get("country").valueChanges', country));

        this.countryFormControl.valueChanges
    .subscribe(country => console
    .log('this.countryFormControl.valueChanges', country));

    this.registerForm = this.formBuilder.group({
      index: ['', Validators.required],
      city:['', Validators.required],
      area: ['', Validators.required],
      street: ['', [Validators.required]],
      house:['',[Validators.required]],
  });


  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.router.navigate(['identify']);
      // display form values on success
   //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }


  onCountrySelected($event: Country) {
    console.log($event);
  }



}
