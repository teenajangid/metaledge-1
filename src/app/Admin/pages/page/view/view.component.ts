import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestsService } from 'src/app/service/requests.service';
import { pageModel } from '../page.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewPageComponent implements OnInit {

  pages : pageModel[] = [];
  constructor(private request:RequestsService,private route:Router,private toastr:ToastrService, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.viewPage();
  }

  viewPage(){
    this.request.Get('view-page/').subscribe((res:any)=>{
      this.pages = res.data;
    });
  }

  changeStatus(pageId:any){
    this.request.Post('edit-page-status/'+pageId,'').subscribe((res:any)=>{
      console.log(res);
      this.viewPage();
      this.toastr.success(res.message);
    },(err)=>{
      console.log(err);
    });
  }

  deletepage(pageId:number){
    this.request.Delete('delete-page/'+pageId,'').subscribe((res:any)=>{
      console.log(res);
      this.viewPage();
      this.toastr.success(res.message);
    },(err)=>{
      console.log(err);
    });
  }

}
