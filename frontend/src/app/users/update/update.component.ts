import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/app/model/user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  user:user;
  usergroup:FormGroup
  constructor(private formbuilder:FormBuilder,
              private routeactivate:ActivatedRoute,
              private userservice:UserService,
              private route:Router) { }

  ngOnInit() {
     //recuperation des info de utilisateur
    //on recupere id de utilisateur
    const id=this.routeactivate.snapshot.params['id'];
    this.user=this.userservice.getOneuser(+id);
    this.intform();
  }

  //initialisalisttion du formulaire
  intform(){
    this.usergroup=this.formbuilder.group(
      {
        //ici on va initialiser notre  formulaire en validant les champs
        firstname:[this.user.firstname,[Validators.required]],
        lastname:[this.user.lastname,[Validators.required]],
        email:[this.user.email,[Validators.required,Validators.email]],
        login:[this.user.login,[Validators.required]],
        password:[this.user.password,[Validators.required]]
      }
    )
  }
  //methode local pour update utilisateur

  updateuser(){

    const valeur=this.usergroup.value;
    //recuperation des informations saisies dans le formulaire
    const firstname=valeur['firstname'];
    const lastname=valeur['lastname'];
    const email=valeur['email'];
    const login=valeur['login'];
    const password=valeur['password'];
    //on construit utilisateur
    const usr:user=new user(firstname,lastname,email,login,password,this.user.isadmin);
    //affectation de id
    usr.id=this.user.id;
    //on utilise le service
    
    //console.log(usr);

    this.userservice.updateuser(usr);

    this.userservice.alluser();
    //this.userservice.emitusers();
    
    this.route.navigate(['user','list',2]);  
   
 }
}