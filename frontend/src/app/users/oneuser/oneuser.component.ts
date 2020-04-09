import { Component, OnInit, Input } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { UpfileComponent } from 'src/app/upfile/upfile.component';

@Component({
  selector: 'app-oneuser',
  templateUrl: './oneuser.component.html',
  styleUrls: ['./oneuser.component.scss']
})
export class OneuserComponent implements OnInit {

  constructor(private userservice:UserService,
    private route:Router,
    private dialog:MatDialog,
    private authservice:AuthService) { 
     
    }
    

  ngOnInit() {
    this.avatar='http://localhost:8001/upload/avatar/'+this.user.avatar;
  }

  @Input() user:user
  @Input() avatar:string  

  @Input() present:boolean=true;


  //les methodes local
  adduser(user:user){
    //this.userservice.adduser(user);
  }
  deleteuser(id:number){
    
    this.userservice.deleteuser(id).subscribe(

      (data)=>{
          //on recupere la liste de tous les users
          console.log("on a supprimer utilisateur de nom "+data.firstname);
          this.userservice.alluser();
          this.userservice.emitusers();
      }
    );
     
  
  }

  

  detailuser(id:number){
    this.route.navigate(['user','detail',id]);  
  }
  //mettre  en tant admin

  nommeruser(user:user){
    this.userservice.nommeruser(user);
    this.userservice.alluser();
    this.userservice.emitusers();
  }
  
  //returer utilisateur comme administrateur
  retireruser(user:user){
    this.userservice.retireruser(user);
    this.userservice.alluser();
    this.userservice.emitusers();
  }


  //gestion de la confirmation de suppressioin 
  open(){
    
    this.present=false;
  }
  close(){
    
    this.present=true;
  }

  //update de image
  updateimage(){
    this.dialog.open(UserFormComponent);
  }
}
