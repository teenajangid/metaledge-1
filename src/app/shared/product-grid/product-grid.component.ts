import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import { RequestsService } from 'src/app/service/requests.service';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { productModel } from 'src/app/Admin/pages/product/product.model';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  constructor(private request:RequestsService,private modalService:BsModalService) { }
  @Input() data:any = [];
  websiteInfo:any;
  curr:any;
  closeResult = '';
  modalRef: BsModalRef | any;
  product: productModel | undefined;
  productForm: FormGroup|any;

  validationMapping: any = {
    'qty': { required:"qty is required",maxlength:"Maximum 5 product"},
    'productId': { required:"Product is required"},
  };

  validationField: boolean = false;
  validationFieldMessage: any = {};


  ngOnInit(): void {
    this.initializeForm();
    this.request.Get('website').subscribe((res:any)=>{
      this.websiteInfo = res[0][0];
      this.curr = getCurrencySymbol(this.websiteInfo.currency, "wide");
    });
  }

  initializeForm() {
    this.productForm = new FormGroup({
      qty: new FormControl('', [Validators.required,Validators.maxLength(5)]),
      productId: new FormControl('',[Validators.required])
    })
  }

  addToCart(productId:any){
    console.log(productId)
  }

  viewProduct(template: TemplateRef<any>,productId:any) {
    console.log(productId)

    this.request.Get('view-product/'+productId).subscribe((res:any)=>{
      console.log(res)
      this.product = res.data;
    },(err)=>{
      console.log(err)
    });

    this.modalRef = this.modalService.show(template,{
      class: 'modal-lg modal-dialog-centered'
    });
  }

  closeModel(){
    this.modalService.hide();
  }

  // Product Quantity
  productQTY(n:any){

  if (this.productForm.valid) {
    if(this.productForm.value.qty == ""){
      this.productForm.value.qty = 0;
    }

    let qty = parseInt(this.productForm.value.qty) + n;
    if(this.productForm.value.qty >= 0){

      this.productForm.patchValue({"qty":qty!=-1?qty:0})
    }
  }else{
    if (this.GetErrorsFromFormGroup(this.productForm, this.validationMapping)) {
      this.validationField = true;
      this.validationFieldMessage = this.GetErrorsFromFormGroup(this.productForm, this.validationMapping);
    }
  }

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
