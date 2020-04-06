import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { user } from '../model/user.model';
import { resolve } from 'url';
import { reject } from 'q';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  
  headers:Headers=new Headers();
  options:any;
  server='http://localhost:8001/user';
  constructor( private http:HttpClient) 
  
  {
    this.headers.append('enctype','multipart/form-data');;
    this.headers.append('Content-type','application/json');
    this.headers.append('X-Requested-With','XMLhttpRequest');
    this.options=new RequestOptions({});
   }

  //sauvegarde de utilisateur connecté
  
  userauth:user=new user('','' ,'','','',false);
  //au debut, utilisateur n'est pas connecte
    //boutton pour arreter la progession du spinner
  showspinner=false;

  //methode de connection

signup(login:string,password:string){
    
  
  this.http.get<user>(this.server+'/connection/'+login+'/'+password).subscribe(
    (data)=>{
      //recuperation de utilisateur
      const user:user=data[0];
      //verification s'il existe
      if(user!=null){
        user.isauth=true;
        this.userauth=user;
      }
      else{
        console.log("utilisateur existant");
      }
    }
  )
}
//methode de deconnection
deconnecter(){
  this.userauth.isauth=false;
}
}
