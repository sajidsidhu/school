<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClassDetail extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'subject_name'=>$this->subject->name,
            'teacher_name'=>$this->teacher->user->name,
            'start_time'=>$this->start_time,
            'end_time'=>$this->end_time
        ];
    }
}
