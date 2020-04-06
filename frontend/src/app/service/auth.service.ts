import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { user } from '../model/user.model';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  
  constructor(private userservice:UserService) {
    this.userauth.isauth=false;
   }

  //sauvegarde de utilisateur connecté
  
  userauth:user=new user('','' ,'','','',false);
  //au debut, utilisateur n'est pas connecte
    //boutton pour arreter la progession du spinner
  showspinner=false;

  //methode de connection
  
 /* signup(login:string,password:string){
    
    return new Promise(
      (resolve,reject)=>{
       
        setTimeout(() => {
        this.userservice.getusernyloginandpassword(login,password);
          
          
        }, 2000);
        resolve(user)
      }

    )
  }

}*/
signup(login:string,password:string){
    
  const user=this.userservice.getusernyloginandpassword(login,password);
  
  if(user){
    user.isauth=true;
    this.userauth=user;
  }
  
  
}
//methode de deconnection
deconnecter(){
  this.userauth.isauth=false;
}
}
