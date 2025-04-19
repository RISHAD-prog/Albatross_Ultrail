<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRegistrationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use App\Models\RaceCategory;
use Illuminate\Support\Facades\Hash;
use App\Models\Registration;

class RegistrationController extends Controller
{
    function GetAllRaceCategories(): Collection
    {
        return RaceCategory::all();
    }

    function CreateRegistration(StoreRegistrationRequest $request)
    {
        $validated = $request->validated();
        $validated['Password'] = Hash::make($validated['Password']);

        // Format dates properly
        $validated['DOB'] = date('Y-m-d H:i:s', strtotime($validated['DOB']));

        try {
            $registration = Registration::create($validated);
            return response()->json([
                'success' => true,
                'data' => $registration,
                'message' => 'Registration successful'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Registration failed: ' . $e->getMessage()
            ], 500);
        }
    }
}
