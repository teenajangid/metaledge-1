import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  name: string | any = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.name = localStorage.getItem("admin-token");
    },1)
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
