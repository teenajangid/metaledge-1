import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RequestsService } from 'src/app/service/requests.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {


  forgotpasswordform: FormGroup | any;
  validationMapping: any = {
    'email': { required:"Email is required", pattern: "Email is invalid"},
    'password': { required:"Password is required"},
  };

  validationField: boolean = false;
  validationFieldMessage: any = {};

  constructor(private spinner:NgxSpinnerService,private request:RequestsService,private route:Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(){
    this.spinner.show();
    if (this.forgotpasswordform.valid) {
      this.spinner.hide();
      console.log(this.forgotpasswordform.value)
      this.request.Post('login',this.forgotpasswordform.value).subscribe((res:any)=>{
        localStorage.setItem("token",res.data.token);
        this.route.navigate(['/admin/dashboard']);
      },(err)=>{console.log(err)});
    }else{
      if (this.GetErrorsFromFormGroup(this.forgotpasswordform, this.validationMapping)) {
        this.validationField = true;
        this.validationFieldMessage = this.GetErrorsFromFormGroup(this.forgotpasswordform, this.validationMapping);
        this.spinner.hide();
      }
    }
  }

  initializeForm() {
    this.forgotpasswordform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^(([\\w-]+\\.)+[\\w-]+|([a-zA-Z]{1}|[\\w-]{2,100}))@((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|([a-zA-Z0-9]+[\\w-]+\\.)+[a-zA-Z]{2,9})$")])
    })
  }

  GetErrorsFromFormGroup(formgroup: FormGroup, errorMapping: any) {
    var Errors: any = [];
    Object.keys(formgroup.controls).forEach(key => {
      const controlErrors: any = formgroup.get(key)?.errors;
      if (controlErrors != null) Object.keys(controlErrors).forEach(keyError => {
        Errors[key] = errorMapping[key][keyError];
      });
    });

    return Errors;
  }
}
