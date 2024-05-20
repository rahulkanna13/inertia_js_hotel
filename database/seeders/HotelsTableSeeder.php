<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hotel;

class HotelsTableSeeder extends Seeder
{
    public function run()
    {
        // Sample data
        $hotels = [
            [
                'name' => 'Luxury Hotel A',
                'description' => 'A luxurious hotel with great amenities',
                'price' => 250.00,
                'owner_id' => 1, // Replace with the actual owner's ID
                'contact_numbers' => '123-456-7890',
                'modified_on' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Cozy Inn B',
                'description' => 'A cozy inn in a beautiful location',
                'price' => 150.00,
                'owner_id' => 2, // Replace with the actual owner's ID
                'contact_numbers' => '987-654-3210',
                'modified_on' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Budget Motel C',
                'description' => 'An affordable motel near the city center',
                'price' => 100.00,
                'owner_id' => 3, // Replace with the actual owner's ID
                'contact_numbers' => '321-098-7654',
                'modified_on' => now(),
                'created_at' => now(),
                'updated_at' => now(),

            ],
            // Add more hotels as needed
        ];

        // Insert data into the hotels table
        Hotel::insert($hotels);
    }
}

// php artisan db:seed --class=HotelsTableSeeder