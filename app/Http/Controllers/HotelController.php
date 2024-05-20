<?php
namespace App\Http\Controllers;
use App\Models\Hotel;
use Illuminate\Http\Request;
use App\Models\Image;
use Inertia\Inertia;

    class HotelController extends Controller
    {

        public function index(Request $request)
        {
            // Query builder for hotels
            $hotels = Hotel::paginate(10); 
        
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
            $hotel = Hotel::findOrFail($id);
            return Inertia::render('Hotels/EditHotelPage', ['hotel' => $hotel]);
        }

        
public function updateHotel(Request $request, $id)
{
    $hotel = Hotel::find($id);

    $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
        // Add validation rules for other fields
    ]);

    $hotel->update($request->all());

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
