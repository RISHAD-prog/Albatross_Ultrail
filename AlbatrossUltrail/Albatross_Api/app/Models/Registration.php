<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $table = 'Registration';

    use HasFactory;

    protected $fillable = [
        'DOB',        
        'Email',
        'FirstName',
        'LastName',
        'Street',
        'City',
        'Country',
        'Comments',
        'UserPhoto',
        'Gender',
        'IdentificationNum',
        'IdentifyType',
        'ITRAUserName',
        'Nationality',
        'Password',    
        'Phone',
        'RaceCategoryID',
        'TShirtSize',
    ];

    // Cast date fields
    protected $casts = [
        'DOB' => 'datetime:Y-m-d H:i:s',
    ];

    // Fields that should be hidden in responses
    protected $hidden = [
        'Password',
    ];
}
