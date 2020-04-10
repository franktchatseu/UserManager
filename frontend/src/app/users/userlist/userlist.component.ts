import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { user } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
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

  items = [];
  pageOfItems: Array<any>;

  listuser:user[];
  statusliste:number=2;
  userSubcription:Subscription
  constructor(private routeactivate:ActivatedRoute,
              private userservice:UserService,
              private route:Router,
              private dialog:MatDialog,
              private authservice:AuthService){ 

                
                
    
  }

  ngOnInit() {
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    
    this.statusliste=+this.routeactivate.snapshot.params['status'];
                console.log(this.statusliste)
                //on recupere la liste de tout les utilisateur
                this.alluser();
  }
  ngOnDestroy(){
    this.userSubcription.unsubscribe();
  }

  //pour ajout d'un nouvel user
  newuser(){
    this.dialog.open(UserFormComponent);
    this.userservice.alluser();
    this.userservice.emitusers();
    //this.route.navigate(['user','edit']);
  }

  //les methodes local
  adduser(user:user){
   // this.userservice.adduser(user);
  }
  
  //recuperation de tout les users
  alluser(){
    
   
    if(this.statusliste==0)
       this.userservice.getlistuserbystatus(0);
    else if(this.statusliste==1)
      this.userservice.getlistuserbystatus(1);
    else
      this.userservice.alluser();
    
    //this.listuser=this.userservice.getlistusers();
    
    this.userSubcription=this.userservice.usersubject.subscribe(
      (listsusers:user[])=>{
        this.listuser=listsusers
        
        
      }
    )
    this.userservice.emitusers();
    console.log(this.listuser)
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
