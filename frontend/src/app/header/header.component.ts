import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice:AuthService,private route:Router) { }

  ngOnInit() {
  }

  detailuser(id:number){
    this.route.navigate(['user','detail',id]);  
  }
}
