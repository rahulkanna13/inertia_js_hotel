<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'price',
        'description',
        'owner_id',
        'contact_numbers',
        // Add other fields as needed
    ];

    // Specify the table name if it's different from the default "hotels"
    // protected $table = 'custom_hotels_table';

    // Relationships
    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
        
    }

    public function bookings()
    {
        // return $this->hasMany(Booking::class);
    }

    // Timestamps
    // Eloquent assumes "created_at" and "updated_at" columns by default
    // Uncomment the lines below if you want to use "created_on" and "modified_on"
    // const CREATED_AT = 'created_on';
    // const UPDATED_AT = 'modified_on';

    // You can customize the format of the timestamps
    // protected $dateFormat = 'Y-m-d H:i:s.u';

    // Additional fields
    protected $dates = ['created_on', 'modified_on'];

    // Customize the format of the dates if needed
    // protected $dateFormat = 'Y-m-d H:i:s';

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
