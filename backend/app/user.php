<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class user extends Model
{
    //on va utiliser les scopes ici pour rendre notre code plus lisible au niveau du controller

    public function scopelistuserbystatus($query,$status){
        return $query->where('isadmin','=',$status)->get();
    }
    public function scopelistadmin($query){
        return $query->where('isadmin','=','1')->get();
    }
    //methode de suppression d'un user
    public function scopedeluser($query,$id){
        return $query->where('id',$id)->delete();
    }

    //methode pour recuperer les users
    public function scopeuserbyid($query,$id){
        return $query->where('id',$id)->get();
    }
    
}
