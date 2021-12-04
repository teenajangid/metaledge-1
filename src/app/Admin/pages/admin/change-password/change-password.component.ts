import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { RequestsService } from 'src/app/service/requests.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changepasswordform: FormGroup | any;
  validationMapping: any = {
    'oldpassword': { required:"Old Password is required"},
    'newpassword': { required:"New Password is required"},
    'newpassword_confirmation': { required:"Confirm Password is required"},
  };

  validationField: boolean = false;
  validationFieldMessage: any = {};

  constructor(private spinner:NgxSpinnerService,private request:RequestsService,private route:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(){
    this.spinner.show();
    if (this.changepasswordform.valid) {
      this.spinner.hide();
      console.log(this.changepasswordform.value)
      this.request.Post('change-password',this.changepasswordform.value).subscribe((res:any)=>{
        localStorage.setItem("token",res.data.token);
        this.route.navigate(['/admin/dashboard']);
        this.toastr.success(res.message)
      },(err)=>{
        this.toastr.error(err.error.errors.email[0]);
        console.log(err)
      });
    }else{
      if (this.GetErrorsFromFormGroup(this.changepasswordform, this.validationMapping)) {
        this.validationField = true;
        this.validationFieldMessage = this.GetErrorsFromFormGroup(this.changepasswordform, this.validationMapping);
        this.spinner.hide();
      }
    }
  }

  initializeForm() {
    this.changepasswordform = new FormGroup({
      oldpassword: new FormControl('',[Validators.required]),
      newpassword: new FormControl('',[Validators.required]),
      newpassword_confirmation: new FormControl('',[Validators.required])
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
