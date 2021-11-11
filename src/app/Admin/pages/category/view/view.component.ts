import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestsService } from 'src/app/service/requests.service';
import { categoryModel } from '../category.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewCategoryComponent implements OnInit {

  categories : categoryModel[] = [];
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

    this.request.Get('view-category/'+n.toString()+'/'+n.toString()).subscribe((res:any)=>{
      this.categories = res.data
      // console.log(this.categories)
    });
  }

  changeStatus(categoryId:any){
    this.request.Post('edit-category-status/'+categoryId,'').subscribe((res:any)=>{
      console.log(res);
      this.viewCategories(0);
      this.toastr.success(res.message);
    },(err)=>{
      console.log(err);
    });
  }

  deleteCategory(categoryId:number){
    this.request.Delete('delete-category/'+categoryId,'').subscribe((res:any)=>{
      console.log(res);
      this.viewCategories(0);
      this.toastr.success(res.message);
    },(err)=>{
      console.log(err);
    });
  }
}
