<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class user extends Model
{
    //on va utiliser les scopes ici pour rendre notre code plus lisible au niveau du controller

    public function scopestatus($query){
        return $query->where('status','=','0')->get();
    }

    //methode de suppression d'un user
    public function scopedeluser($query,$id){
        return $query->where('id',$id)->delete();
    }

    
}
