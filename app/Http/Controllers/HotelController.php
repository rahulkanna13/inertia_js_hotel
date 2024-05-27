<?php
namespace App\Http\Controllers;
use App\Models\Hotel;
use Illuminate\Http\Request;
use App\Models\Image;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Exception;
use Illuminate\Support\Facades\Storage;

    class HotelController extends Controller
    {

        public function index(Request $request)
        {
            // Query builder for hotels with images
        $hotels = Hotel::with('images')->paginate(10);

        // Fetch the paginated results

        return inertia('Hotels/HotelListPage', [
            'hotels' => $hotels,
        ]);
        }
        

    // HotelListPage
        //
        public function getFeaturedHotels()
        {
            $featuredHotels = Hotel::with('images')->select('id', 'name', 'description','price')->limit(5)->get();

            return response()->json(['featuredHotels' => $featuredHotels]);
        }

        public function showManageHotels()
        {
            $hotels = Hotel::all();
            return Inertia::render('Hotels/ManageHotelsPage', compact('hotels'));
            
            
        }

        public function editHotel($id)
        {
            $hotel = Hotel::with('images')->findOrFail($id);
            return Inertia::render('Hotels/EditHotelPage', ['hotel' => $hotel]);
        }

        
// public function updateHotel(Request $request, $id)
// {
//     $hotel = Hotel::find($id);

//     $request->validate([
//         'name' => 'required|string|max:255',
//         'description' => 'nullable|string',
//         // Add validation rules for other fields
//     ]);

//     $hotel->update($request->all());

//     return redirect('/manage-hotels')->with('success', 'Hotel updated successfully.');
// }

public function updateHotel(Request $request, $id)
{
    dd($request->all());
    $hotel = Hotel::findOrFail($id);

    $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
        'image' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
    ]);

    $hotel->update($request->only('name', 'description'));

    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('hotel_images', 'public');
        Image::create([
            'hotel_id' => $hotel->id,
            'image_path' => $imagePath,
        ]);
    }

    return redirect('/manage-hotels')->with('success', 'Hotel updated successfully.');
}

public function showAddHotel()
{
    return inertia('Hotels/AddHotelPage');
}

        // public function updateHotel(Request $request, $id)
        // {
        //     $hotel = Hotel::findOrFail($id);
        //     $hotel->update($request->all());

        //     return redirect()->route('manage-hotels')->with('success', 'Hotel updated successfully');
        // }

        public function deleteHotel($id)
        {
            $hotel = Hotel::findOrFail($id);
            $hotel->delete();

            return redirect()->route('manage-hotels')->with('success', 'Hotel deleted successfully');
        }

        
    public function createHotel(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            // 'address' => 'required|string|max:255',
            // 'price' => 'required|numeric',
            'description' => 'required|string',
            // 'owner_id' => 'required|exists:users,id', // Assuming you have a 'users' table for owners
            // 'contact_numbers' => 'required|string|max:255',
            // Add other fields as needed
        ]);

        // Create a new hotel with the validated data
        $hotel = Hotel::create($validatedData);

        // Optionally, you can return a response or redirect to a specific page
        return redirect()->route('manage-hotels')->with('success', 'Hotel created successfully');
    }






    }
