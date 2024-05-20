<?php

// app/Http/Controllers/AdminController.php

// app/Http/Controllers/AdminController.php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\Image;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function showImageForm($hotelId)
    {
        $hotel = Hotel::findOrFail($hotelId);

        return Inertia::render('Admin/ImageForm', [
            'hotel' => $hotel,
        ]);
    }

    public function uploadImage(Request $request, $hotelId)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $hotel = Hotel::findOrFail($hotelId);

        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $imageName);

        $hotel->images()->create([
            'image_path' => $imageName,
        ]);

        return redirect()->route('admin.showImageForm', $hotelId)->with('success', 'Image uploaded successfully.');
    }
}
