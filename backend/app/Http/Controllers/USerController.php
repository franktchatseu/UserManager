<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\user;
class USerController extends Controller
{
    //methode pour la gestion des utilisateurs

    public function connection($login,$password){
        
        //recherche de utilisateur correspondant
        $user=user::where('login','=',$login)->where('password','=',$password)->get();
	
        return $user;        

    }

    public function getuser(){
        $user=user::all();

        //recuperation de tous les utilisateur qui ont pour status 1
        //utilisation de la clause where avec eloquent
        //$user=user::where('status','=','1')->orwhere('firstname', 'LIKE', '%'.'ng' .'%')->orderby('lastname','asc')->get();
       
        //utilisation des scopes pour recuperer les valeurs
        //$user=user::status();

        return $user;
    }

    //controlleur pour recuperer tout les utilisateurs qui sont des membres

    public function getlistuserbystatus($status){
        //utilisation des scopes
        $user=user::listuserbystatus($status);

        return $user;
    }

    public function adduser(){
        $data=request();
        
        $user=new user();
        $firstname=request('firstname');
        $lastname=request('lastname');
        $email=request('email');
        $login=request('login');
        $password=request('password');
        $status=request('isadmin');

        $user->firstname=$firstname;
        $user->lastname=$lastname;
        $user->email=$email;
        $user->login=$login;
        $user->password=$password;
        $user->isadmin=$status;
        //on ajoute dans la base de donnee
        $user->save();
        $user=user::all();
        //cette methode de retour va recharger la page via une requette avec get
        return $user;
    }

    //fonction pour mettre a jour un user
    public function update(){
        $data=request();
        $user=user::find($data->id);
        //recuperation des donnees et affectation ses champs
        $user->firstname=$data->firstname;
        $user->lastname=$data->lastname;
        $user->email=$data->email;
        $user->login=$data->login;
        $user->password=$data->password;
        
        $user->update();
        return $user;
    }

    //fonction de suppression d'un utilisateur

    public function deleteuser(){
        //recuperation de id de utilisateur
        $id=request('id');
        user::deluser($id);
        $user=user::all();
        
        return $user;
    }
    //cette methode definira utilisateur en tant que administrateur
    
    public function isadmin($id){

        
        $user=user::find($id);
        $user->isadmin=1;
        $user->update();
        return $user;

    }
    //cette methode enlevera utilisateur en tant que administrateur
    
    public function notadmin($id){

        $user=user::find($id);
        $user->isadmin=0;
        $user->update();
        return $user;
    }
}
