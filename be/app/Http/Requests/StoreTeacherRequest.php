<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTeacherRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
           'name'=>'required|min:3',
           'email'=>'required|unique:users,email',
           'password'=>'required|min:6',
           'qualification'=>'required|min:2',
           'starting_date'=>'required|date|date_format:Y-m-d',
           'time_from'=>'required|date_format:H:i',
           'time_to'=>'required|date_format:H:i'
        ];
    }
}
