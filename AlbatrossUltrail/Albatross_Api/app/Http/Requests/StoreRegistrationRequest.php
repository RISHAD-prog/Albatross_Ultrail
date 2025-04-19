<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'City' => 'nullable|string|max:500',
            'Country' => 'nullable|string|max:500',
            'DOB' => 'required',
            'Email' => 'required|email|unique:Registration,Email',
            'FirstName' => 'required|string|max:500',
            'Gender' => 'required|in:m,f,o',
            'IdentificationNum' => 'required|numeric',
            'IdentifyType' => 'required|in:passport,nid,birth_certificate',
            'ITRAUserName' => 'nullable|string|max:50',
            'LastName' => 'nullable|string|max:500',
            'Comments' => 'nullable|string',
            'Nationality' => 'required|string|max:100',
            'Password' => 'required|string|min:8',
            'Phone' => 'required|numeric',
            'RaceCategoryID' => 'required|integer',
            'TShirtSize' => 'required|in:XS,S,M,L,XL,XXL',
            'UserPhoto' => 'nullable|string'
        ];
    }
}
