<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'=>'required',
            'email'=>'required|email|uique:users,email',
            'password'=>'required',
        ]);

        if($validator->fails())
        {

        }
        else 
        {
            
        }
    }
}
