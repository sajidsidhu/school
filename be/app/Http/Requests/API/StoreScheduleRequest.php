<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

class StoreScheduleRequest extends FormRequest
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
            'teacher_id'=>'required|exists:teachers,id',
            'grade_id'=>'required|exists:grades,id',
            'subject_id'=>'required|exists:subjects,id',
            'start_time'=>'required|date_format:H:i',
            'end_time'=>'required|date_format:H:i',
            'day'=>'required|in:mo,tu,we,th,fr,sa,su'
        ];
    }
}
