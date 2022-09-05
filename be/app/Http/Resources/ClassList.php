<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClassList extends JsonResource
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
            'id'=>$this->id,
            'name'=>$this->name,
            "monday_lec"=>$this->monday_lec->count(),
            "tuesday_lec"=>$this->tuesday_lec->count(),
            "wednesday_lec"=>$this->wednesday_lec->count(),
            "thrusday_lec"=>$this->thrusday_lec->count(),
            "friday_lec"=>$this->friday_lec->count(),
            "saturday_lec"=>$this->saturday_lec->count(),
            "sunday_lec"=>$this->sunday_lec->count()
        ];
    }
}
