import { Component, OnInit } from '@angular/core';
import { bannerModel } from 'src/app/Admin/pages/banner/banner.model';
import { RequestsService } from 'src/app/service/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private request:RequestsService) { }
  sliderData:any = [];
  productData:any = [];
  ngOnInit(): void {
    this.viewBanner();
    this.viewProduct();
  }

  viewBanner(){
    this.request.Get('view-active-banner').subscribe((res:any)=>{
      this.sliderData = res.data;
    });
  }

  viewProduct(){
    this.request.Get('view-active-product').subscribe((res:any)=>{
      this.productData = res.data;
    });
  }
}
