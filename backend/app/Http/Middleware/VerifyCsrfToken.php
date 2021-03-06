<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        //
        'user/list','user/add','user/delete','user/isadmin','user/notadmin','user/update','user/connection','user/upload','user/oneuser'
        
    ];
}
