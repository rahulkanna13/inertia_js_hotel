<?php

// app/Models/Image.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['hotel_id','image_path'];

    public function hotel()
    {
        return $this->belongsTo(Hotel::class);
    }
}
