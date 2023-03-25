<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
// use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'=>'required',
            'email' => 'required|email|unique:users,email',
            'password'=>'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'validation_errors' => $validator->messages(),
            ]);
        }
        else 
        {
            $user = User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),
            ]);

            $token = $user->createToken($user->email.'_Token')->plainTextToken;

            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token,
                'message'=>'Registered successfully',
            ]);
        }
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' =>'required|',
            'password' =>'required',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        }
        else 
        {
            $user = User::where('email', $request->email)->first();

            if(! $user || ! Hash::check($request->password, $user->password))
            {
                return response()->json([
                    'status'=>401, 
                    'message' => 'Invalid Credentials',
                ]);
            }
            else 
            {
                if($user->role_as == 1)
                {
                   $token = $user->createToken($user->email.'_AdminToken', ['server:admin'])->plainTextToken;
                }
                else 
                {
                    $token = $user->createToken($user->email.'_Token', [''])->plainTextToken;
                }


                return response()->json([
                    'status'=>200,
                    'username'=>$user->name,
                    'token'=>$token,
                    'message'=>'Logged in successfully',
                ]);
            }

        }

    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response()->json([
           'status'=>200,
           'message'=>'Logged out successfully',
        ]);
    }
}
