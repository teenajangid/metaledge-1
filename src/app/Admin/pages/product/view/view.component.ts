import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestsService } from 'src/app/service/requests.service';
import { productModel } from '../product.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewProductComponent implements OnInit {

  products : productModel[] = [];
  constructor(private request:RequestsService,private route:Router,private toastr:ToastrService, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.viewProducts();
  }

  viewProducts(){
    this.request.Get('view-product/').subscribe((res:any)=>{
      this.products = res.data;
    });
  }

  changeStatus(productId:any){
    this.request.Post('edit-product-status/'+productId,'').subscribe((res:any)=>{
      console.log(res);
      this.viewProducts();
      this.toastr.success(res.message);
    },(err)=>{
      console.log(err);
    });
  }

  deleteproduct(productId:number){
    this.request.Delete('delete-product/'+productId,'').subscribe((res:any)=>{
      console.log(res);
      this.viewProducts();
      this.toastr.success(res.message);
    },(err)=>{
      console.log(err);
    });
  }

}
