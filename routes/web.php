<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\AuthController;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });



Route::get('/', [HomeController::class, 'index'])->name('home');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/index', function () {
    return Inertia::render('index');
});

require __DIR__.'/auth.php';






use App\Http\Controllers\AdminController;





Route::get('/admin/image-form/{hotelId}', [AdminController::class, 'showImageForm'])
    ->name('admin.showImageForm');
    // ->middleware('auth'); // Add any necessary middleware

Route::inertia('/dashboard', 'Dashboard')
    ->middleware('auth')
    ->name('dashboard');

    Route::post('/admin/upload-image/{hotelId}', [AdminController::class, 'uploadImage'])->name('admin.uploadImage');


 


Route::get('/login/google', [AuthController::class, 'redirectToGoogle']);
Route::get('/login/google/callback', [AuthController::class, 'handleGoogleCallback']);


// Route::get('/logout', [AuthController::class, 'logout'])->name('logout');


Route::get('/hotels', [HotelController::class, 'index'])->name('hotels.index');;
Route::get('/hotels/{id}', [HotelController::class, 'show']);
Route::post('/hotels/{id}/book', [HotelController::class, 'book']);
Route::get('/manage-hotels', [HotelController::class, 'showManageHotels'])->name('manage-hotels');
Route::get('/edit-hotel/{id}', [HotelController::class, 'editHotel'])->name('edit-hotel');
Route::put('/update-hotel/{id}', [HotelController::class, 'updateHotel'])->name('update-hotel');
Route::delete('/delete-hotel/{id}', [HotelController::class, 'deleteHotel'])->name('delete-hotel');
// routes/web.php

Route::get('/add-hotel', [HotelController::class,'showAddHotel'])->name('add-hotel');
Route::post('/create-hotel', [HotelController::class,'createHotel'])->name('create-hotel');

