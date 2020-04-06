import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit,OnDestroy {


@Input() present:boolean=true;
  //liste utilisateur en local
  listuser:user[];
  
  userSubcription:Subscription
  constructor(private userservice:UserService,
              private route:Router,
              private dialog:MatDialog,
              private authservice:AuthService){ 
    
    
  }

  ngOnInit() {
    //on recupere la liste de tout les utilisateur
    this.alluser();
  }
  ngOnDestroy(){
    this.userSubcription.unsubscribe();
  }

  //pour ajout d'un nouvel user
  newuser(){
    this.dialog.open(UserFormComponent);
    //this.route.navigate(['user','edit']);
  }

  //les methodes local
  adduser(user:user){
    this.userservice.adduser(user);
  }
  
  //recuperation de tout les users
  alluser(){
    this.userservice.alluser();
    //this.listuser=this.userservice.getlistuser();
    this.userSubcription=this.userservice.usersubject.subscribe(
      (listsusers:user[])=>{
        this.listuser=listsusers
      }
    )
    this.userservice.emitusers();
  }

}
