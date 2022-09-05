<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Grade;
use App\Models\Subject;

class Schedule extends Model
{
    use HasFactory;
    
    protected $fillable = ['user_id','teacher_id','grade_id','subject_id','start_time','end_time','day'];

public function grade(){
    return $this->belongsTo(Grade::class);
}

public function subject(){
    return $this->belongsTo(Subject::class);
}


public function teacher(){
    return $this->belongsTo(Teacher::class);
}










}
