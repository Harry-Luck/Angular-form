import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { emailValidator } from './email-validator.directive';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { NgSelectModule } from '@ng-select/ng-select';
import { FormControl } from '@angular/forms';
import { UploadService } from '../file-upload.service';
@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.css']
})
export class IdentifyComponent implements OnInit {
  file: File = null;

  registerForm: FormGroup;
  submitted = false;

  title = 'app-material3';

  categoriesControl = new FormControl([]);
  categories: string[] = ['VIP Client','Loyal Client', 'New Client',];

  constructor(private formBuilder: FormBuilder,
    private uploadService: UploadService
    ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      //title: ['', Validators.required],
      docu: ['', Validators.required],
      series:['', Validators.required],
      number: ['', Validators.required],
      dateissue: ['', [Validators.required]],
    //  gender:['',[Validators.required]],
    //  coordinator:['', [Validators.required]],
     // clientgroup:['', [Validators.required]],
      //password: ['', [Validators.required, Validators.minLength(6)]],
      //confirmPassword: ['', Validators.required],
    //  acceptTerms: [false, Validators.requiredTrue]
  }
  // , {
  //     validator: MustMatch('password', 'confirmPassword')
  // }
  );
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      console.log(123123132);
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!)\n\n');
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

  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

  upload() {
    if (this.file) {
      alert("Uploaded")
      // this.uploadService.uploadfile(this.file).subscribe(resp => {
      //   alert("Uploaded")
      // })
    } else {
      alert("Please select a file first")
    }
  }

}


