<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//toutes les routes qui se charge des nos users
Route::get('/user', 'USerController@getuser');
//la route pour ajout des utilisateurs
Route::post('/user', 'USerController@adduser');
Route::post('/delete','USerController@deleteuser');
Route::get('/isadmin/{id}','USerController@isadmin');
Route::get('/notadmin/{id}','USerController@notadmin');
Route::post('/update','USerController@update');
Route::get('/connection/{login}/{password}','USerController@connection');


Route::get('/contact', function () {
    return View('contact');
});

Route::get('/apropos', 'ClientControleur@getclients');
Route::get('/client', function () {
    $n=4;
    //on va passer un tableau de client à la vue
    $client=["Tchatseu","Louenkam","Frank"];
    return View('client/index',[
        'client'=>$client,
        'tel'=>'698147584',
        
    ])->withnumero($n);
});