<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClientControleur extends Controller
{
    //on va ecrire une methode qui retournera la vue des clients

   public function getclients(){
    $n=4;
    //on va passer un tableau de client à la vue
    //$client=["Tchatseu","Louenkam","Frank"];
    return View('client/index',[
        'client'=>$client,
        'tel'=>'698147584',
        
    ])->withnumero($n);
   }
}
