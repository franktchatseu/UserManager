import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  usergroup:FormGroup;
  avatar:File;
  constructor(private formbuilder:FormBuilder,
              private userservice:UserService,
              private route:Router,
              private dialog:MatDialog) { }

  ngOnInit() {
    this.intform();
  }

  //initialisalisttion du formulaire
  intform(){
    this.usergroup=this.formbuilder.group(
      {
        //ici on va initialiser notre  formulaire en validant les champs
        firstname:['',[Validators.required]],
        lastname:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        login:['',[Validators.required]],
        password:['',[Validators.required]]
        
      }
    )
  }
  //methode local ajout d'un utilisateur

  adduser(){
    const valeur=this.usergroup.value;
    //recuperation des informations saisies dans le formulaire
    const firstname=valeur['firstname'];
    const lastname=valeur['lastname'];
    const email=valeur['email'];
    const login=valeur['login'];
    const password=valeur['password'];

    
    //on construit utilisateur
   // const usr:user=new user(firstname,lastname,email,login,password,false);
    // recuperation de image et des info de user
    var formdata=new FormData();
    formdata.append("image",this.avatar,this.avatar.name);
    formdata.append("firstname",firstname);
    formdata.append("lastname",lastname);
    formdata.append("email",email);
    formdata.append("login",login);
    formdata.append("password",password);
    //on ajoute maintenant en utilisant le service
    

    //console.log(usr)
    this.userservice.adduser(formdata);
   // alert("ajout reussi");
    this.dialog.closeAll;
  }

  //recuperation du fichier

  detectfile(event){
    this.avatar=event.target.files[0];
    }
  
}
