<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class DayScheduleDetail extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $startTime = Carbon::parse($this->start_time);
        $finishTime = Carbon::parse($this->end_time);
        return [
            'class'=>$this->grade->name,
            'subject'=>$this->subject->name,
            'start_time'=>$this->start_time,
            'end_time'=>$this->end_time,
            'duration'=>$startTime->diffInMinutes($finishTime)." Minutes"
        ];
    }
}
