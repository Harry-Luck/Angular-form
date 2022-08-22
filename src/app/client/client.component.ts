import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { emailValidator } from './email-validator.directive';
//import { MustMatch } from './must-match.validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { NgSelectModule } from '@ng-select/ng-select';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  title = 'app-material3';

  categoriesControl = new FormControl([]);
  categories: string[] = ['VIP Client','Loyal Client', 'New Client'];

  constructor(private formBuilder: FormBuilder, private router:Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName:['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
    //  clientgroup:['',Validators.required],
      phone: ['', [Validators.required]],
      gender:['',[Validators.required]],
      coordinator:['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
  }
  );
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      console.log(123123132);
      this.submitted = true;

      if (this.registerForm.invalid) {
          return;
      }
      //this.router.navigateByUrl('/address');
      this.router.navigate(['/address']);
      // display form values on success
   //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

  onCatRemoved(cat: string) {
    const categories = this.categoriesControl.value as string[];
    this.removeFirst(categories, cat);
    this.categoriesControl.setValue(categories); // To trigger change detection
  }

  private removeFirst(array: string[], toRemove:string): void {

    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
      console.log("12312312323123123",array.splice(index, 1))
    }
  }

}
