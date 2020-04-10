<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        DB::table('users')->insert([
            'firstname'     => 'Tchatseu',
            'lastname' => 'Louenkam',
            'email'    => 'louenkamfrank@gmail.com',
            'login'    => 'frank',
            'isadmin'  =>1,
            'avatar'   => 'impressing.jpg',
            'password' => '123',
            "created_at" =>  \Carbon\Carbon::now(),
            "updated_at" => \Carbon\Carbon::now(), 
        ]);
    }
}
