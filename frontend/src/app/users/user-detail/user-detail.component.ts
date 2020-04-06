import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user:user;
  constructor( private routeactivate:ActivatedRoute,
                private userservice:UserService,
                private route:Router,
                private authservice:AuthService) {}

  ngOnInit() {
    
    //recuperation des info de utilisateur
    //on recupere id de utilisateur
    const id=this.routeactivate.snapshot.params['id'];
    this.user=this.userservice.getOneuser(+id);
  }

  //methode pour passer a la mise a jour d'un user
  newupdate(){
    //on se dirige vers le formulaire de modification avec cette user
    this.route.navigate(['user','update',this.user.id]);
  }
  

}
