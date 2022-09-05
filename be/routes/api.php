<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\GradeController;
use App\Http\Controllers\API\SubjectController;
use App\Http\Controllers\API\TeacherController;
use App\Http\Controllers\API\ScheduleController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:api'])->group(function(){
    Route::resource('class', GradeController::class);
    Route::resource('teacher', TeacherController::class);
    Route::resource('subject', SubjectController::class);
    Route::resource('schedule', ScheduleController::class);
    Route::get('teacher-all', [TeacherController::class,'all']);
    Route::get('teacher/{id}/{day}', [TeacherController::class,'detail']);
    Route::get('classes-all', [GradeController::class,'list']);
    Route::get('class/{id}/{day}', [GradeController::class,'detail']);
});

Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
});