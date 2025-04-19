<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RaceCategory;

class RegistrationController extends Controller
{
    function GetAllRaceCategories()
    {
        return RaceCategory::all();
    }
}
