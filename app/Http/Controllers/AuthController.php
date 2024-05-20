<?php

// app/Http/Controllers/AuthController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth as LaravelAuth;

class AuthController extends Controller
{
    // Redirect to Google for authentication
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    // Handle Google callback
       // Handle Google callback
       public function handleGoogleCallback()
       {
           // Retrieve user details from Google Sign-In
           $googleUser = Socialite::driver('google')->user();
   
           // Check if the user with the Google ID already exists in your database
           $user = User::where('google_id', $googleUser->id)->first();
   
           if (!$user) {
               // If the user doesn't exist, create a new user
               $user = User::create([
                   'name' => $googleUser->name,
                   'email' => $googleUser->email,
                   'google_id' => $googleUser->id,
                   // Add any additional fields you need for your users
               ]);
           }
   
           // Log in the user
           auth()->login($user);
   
           // Store additional user details in the session if needed
           session(['user_name' => $user->name, 'is_authenticated' => true]);
   
           return redirect('/');
       }

       public function logout()
       {
        LaravelAuth::logout();
   
           // Optionally, you can redirect the user to a specific page after logout
           return redirect('/');
       }
    
}
