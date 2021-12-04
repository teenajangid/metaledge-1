import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestsService } from 'src/app/service/requests.service';
import { bannerModel } from '../banner.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewBannerComponent implements OnInit {

  banners : bannerModel[] = [];
  constructor(private request:RequestsService,private route:Router,private toastr:ToastrService, private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    let n =  this.activatedRoute.params.subscribe(paramsId => {
      console.log(paramsId.id);
      this.viewCategories(paramsId.id)
    });
  }

  viewCategories(n:any){
    if(n == undefined){
      n = 0;
    }

    console.log(n.toString())

    this.request.Get('view-banner/').subscribe((res:any)=>{
      this.banners = res.data
      // console.log(this.categories)
    });
  }

  changeStatus(categoryId:any){
    this.request.Post('edit-banner-status/'+categoryId,'').subscribe((res:any)=>{
      console.log(res);
      this.viewCategories(0);
      this.toastr.success(res.message);
    },(err)=>{
      console.log(err);
    });
  }

  deleteBanner(categoryId:number){
    this.request.Delete('delete-banner/'+categoryId,'').subscribe((res:any)=>{
      console.log(res);
      this.viewCategories(0);
      this.toastr.success(res.message);
    },(err)=>{
      console.log(err);
    });
  }
}
