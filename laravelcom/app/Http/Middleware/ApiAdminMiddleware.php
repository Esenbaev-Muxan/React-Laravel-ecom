<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class ApiAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if(Auth::check())
        {
            if(auth()->user()->tokenCan('server:admin'))
            {
                return $next($request);
            }
            else 
            {
                return response()->json([
                    'message'=>'Access Denied.! As you are not an Admin.',
                ], 403);
            }
        }
        else 
        {
            return response()->json([
                'status'=>401,
                'message'=>'Please Login First.',
            ]);
        }

        // return $next($request);
    }
}
