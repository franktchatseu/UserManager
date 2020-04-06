import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';
import { user } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  //les proprietes
  signupgroup:FormGroup;
  constructor(private formbuilder:FormBuilder,private authservice:AuthService,
              private route:Router,
              private dialog:MatDialog) { 
                
              }

  ngOnInit() {
    this.initform();
   
  }
  


 

  //initialisation du formulaire
  initform(){
    this.signupgroup=this.formbuilder.group(
      {
        login:['',[Validators.required]],
        password:['',[Validators.required]],
      }
    )
  }
  //methode de connection 
  signup(){
    this.authservice.showspinner=true;
    const login=this.signupgroup.value['login'];
    const password=this.signupgroup.value['password'];
    const user=this.authservice.signup(login,password);
    
      //on prend un peut de temps pour le chargement
      
         let observable = new Observable(this.myObservable);
         this.showProgressSpinnerUntilExecuted(observable);
        
    

  }


  myObservable(observer) {
    setTimeout(() => {
      observer.next("done waiting for 5 sec");
      observer.complete();
    }, 1000);
  }

  showProgressSpinnerUntilExecuted(observable: Observable<Object>) {
    let dialogRef: MatDialogRef<SpinnerComponent> = this.dialog.open(SpinnerComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    let subscription = observable.subscribe(
      (response: any) => {
        subscription.unsubscribe();
        
        //apres le chargement , si utilisateur est pret, il pourra avoir acces aux autres pages
        if(this.authservice.userauth.isauth){
          this.route.navigate(['user','list']);
        }
        else{
          console.log('echec de connection');
    
        }
        //handle response
        console.log(response);
        dialogRef.close();
      },
      (error) => {
        subscription.unsubscribe();
        //handle error
        dialogRef.close();
      }
    );
  }

}
