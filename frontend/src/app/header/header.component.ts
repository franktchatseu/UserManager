import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice:AuthService,private route:Router,private userservice:UserService) { }

  ngOnInit() {
  }

  detailuser(id:number){
    this.route.navigate(['user','detail',id]);  
  }
   //methode pour passer a la mise a jour d'un user
   getliststatus(status:number){
    //on se dirige vers le formulaire de modification avec cette user
    if(status!=2)
      this.userservice.getlistuserbystatus(status);
    else 
      this.userservice.alluser();
      
    this.route.navigate(['user','list',status]);
  }
}
