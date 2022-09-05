<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;
    protected $fillable=['user_id','name','description'];

    public function monday_lec(){
        return $this->hasMany(Schedule::class)->where('day','mo');
    }
    
    public function tuesday_lec(){
        return $this->hasMany(Schedule::class)->where('day','tu');
    }
    public function wednesday_lec(){
        return $this->hasMany(Schedule::class)->where('day','we');
    }
    public function thrusday_lec(){
        return $this->hasMany(Schedule::class)->where('day','th');
    }
    public function friday_lec(){
        return $this->hasMany(Schedule::class)->where('day','fr');
    }
    public function saturday_lec(){
        return $this->hasMany(Schedule::class)->where('day','sa');
    }
    public function sunday_lec(){
        return $this->hasMany(Schedule::class)->where('day','su');
    }
    
}
