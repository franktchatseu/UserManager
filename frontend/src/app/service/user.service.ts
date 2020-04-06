import { Injectable } from '@angular/core';
import { user } from '../model/user.model';
import { Subject, Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';
import {Headers,RequestOptions, Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

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


//propriete
//besoin d'un tableau pour stocker tous nos utilisateurs

listuser:user[]=[{
  id:1,
  firstname:"Tchaseu",
  lastname:"Frank",
  email:"louenkamfrank@gmail.com",
  login:"ds",
  password:"ds",
  isadmin:false,
  isauth:false
},
{
  id:2,
  firstname:"Nono",
  lastname:"Guy",
  email:"nonoguy@gmail.com",
  login:"d",
  password:"d",
  isadmin:true,
  isauth:false
},
{
  id:3,
  firstname:"Komegne",
  lastname:"liliane",
  email:"liliane@gmail.com",
  login:"fj",
  password:"fj",
  isadmin:false,
  isauth:false
}
];
usersubject=new Subject<any[]>();

//on va emmetre le subjet de la liste des utilisateurs a chaque 
emitusers(){
  
  this.usersubject.next(this.listuser.slice());
}
//nommer un utilisateur en tant administrateur
nommeruser(user:user){
  
  //on envoi utilisateur dans notre backend pour le traitement
  this.http.get<user>('http://localhost:8001/isadmin/'+user.id).subscribe(
    (data)=>{
        console.log(data);
       
    },
    (error)=>{
      console.log('il ya une erruer'+error);
    
  }
)
  
}

//retirer un utilisateur en tant administrateur
retireruser(user:user){ 
  
  //on envoi utilisateur dans notre backend pour le traitement
  this.http.get<user>('http://localhost:8001/notadmin/'+user.id).subscribe(
    (data)=>{
        console.log(data);
       
    },
    (error)=>{
      console.log('il ya une erruer'+error);
    
  }
  )
}
//on peut ajouter un nouvel utilisateur

adduser(usr:user){
  this.listuser.push(usr);
      this.http.post<user>(this.server,usr).subscribe(
        (data)=>{
            console.log(data);
            this.emitusers();
        },
        (error)=>{
          console.log('il ya une erruer'+error);
        }
          );
        
     
     
}
//metohe de modification de la base de donnee
updateuser(user:user){
  this.http.post<user>('http://localhost:8001/update',user).subscribe(
    (data)=>{
        console.log(data);
        
    },
    (error)=>{
      console.log('il ya une erruer'+error);
    }
      );
    
 
}

//delete user
deleteuser(id:number):Observable<user>{
  //cette ligne est valable que pour le debut car plus tard on travaillera avec une base de donnne avec laravel
  
  //this.listuser.splice(id-1,id);
  //on construit un utilisateur inutile en afin de garder id
  const user={ 
    id:id,

    firstname:"",
    lastname:"",
    email:"",
    login:"",
    password:"",
    isadmin:false,
    isauth:false
  }
    return this.http.post<user>('http://localhost:8001/delete',user);
      
  
}


//recuperer un utilisateur par son id
getOneuser(id:number){
  const user:user=this.listuser.find(
    (userobjet)=>{
      return userobjet.id===id;
    }
  )
  return user;
}
//on recherche un utilisateur par son login et son password

getusernyloginandpassword(login:string,password:string){
  
      /*const user:user=this.listuser.find(
        (userobject)=>{
          return (userobject.login===login)&&(userobject.password)===password;
        }
      )*/

      //recuperation de utilisateur via un appel get
      
      this.http.get<any>('http://localhost:8001/connection').subscribe(
        (data)=>{
          const usr=data;
          return usr;
        }
      )
     
}
//recuperation de la liste des utilsateur
alluser(){
  
    //on recupere la liste de nos utilisateur via notre backend laravel
    this.http.get<any[]>(this.server).subscribe(
      (data)=>{
        this.listuser=data;
        this.emitusers();
      },
      (error)=>{
          console.log('erreur de chargement de la liste des  appareils');
          //lorsqu'il ya erreur de chargement de la liste on renvoi au moi la liste local
      }
    )
    
}

//getters qui renvoie la liste des utilisateurs
getlistusers(){
  return this.listuser;
}

}
