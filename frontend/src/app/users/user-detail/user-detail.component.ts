import { Component, OnInit,Input } from '@angular/core';
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
  @Input() avatar:string 
  @Input() present:boolean=true;
  constructor( private routeactivate:ActivatedRoute,
                private userservice:UserService,
                private route:Router,
                private authservice:AuthService) {

                  
                }

  ngOnInit() {
    
    //recuperation des info de utilisateur
    //on recupere id de utilisateur
    const id=this.routeactivate.snapshot.params['id'];
    this.user=this.userservice.getOneuser(+id);
    this.avatar='http://localhost:8001/upload/avatar/'+this.user.avatar;
  }

  //methode pour passer a la mise a jour d'un user
  newupdate(){
    //on se dirige vers le formulaire de modification avec cette user
    this.route.navigate(['user','update',this.user.id]);
  }
  
  //gestion de la confirmation de suppressioin 
  open(){
    
    this.present=false;
  }
  close(){
    
    this.present=true;
  }
}
