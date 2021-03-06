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

  @Input() user:user;
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
    this.userservice.getOneuser(+id).subscribe(
      (data)=>{
        console.log("vli la "+data[0])
        this.user=data[0];
        this.avatar='http://localhost:8001/upload/avatar/'+this.user.avatar;
      },
      (error)=>{
        console.log("il ya eroor"+error);
        
      }
    );
    //this.avatar='http://localhost:8001/upload/avatar/'+this.user.avatar;
  }

  //methode pour passer a la mise a jour d'un user
  newupdate(){
    //on se dirige vers le formulaire de modification avec cette user
    this.route.navigate(['user','update',this.user.id]);
  }
  //suppression
  deleteuser(id:number){
    
    this.userservice.deleteuser(id).subscribe(

      (data)=>{
          //on recupere la liste de tous les users
          console.log("on a supprimer utilisateur de nom "+data.firstname);
          this.userservice.alluser();
          this.userservice.emitusers();
          this.route.navigate(['user','list',2]);
      }
    );
     
  
  }
  
   //mettre  en tant admin

   nommeruser(user:user){
    this.userservice.nommeruser(user);
    user.isadmin=true;
  }
  
  //returer utilisateur comme administrateur
  retireruser(user:user){
    this.userservice.retireruser(user);
    user.isadmin=false;
    
  }

  //gestion de la confirmation de suppressioin 
  open(){
    
    this.present=false;
  }
  close(){
    
    this.present=true;
  }
}
