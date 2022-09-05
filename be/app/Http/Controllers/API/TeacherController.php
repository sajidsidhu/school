<?php

namespace App\Http\Controllers\API;

use App\Models\Teacher;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreTeacherRequest;
use App\Http\Requests\UpdateTeacherRequest;
use App\Http\Resources\TeacherResource;
use App\Http\Resources\AllTeachers;
use App\Http\Resources\DayScheduleDetail;
use App\Http\Controllers\Controller;
use App\Models\Schedule;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Teacher::all();
        return TeacherResource::collection($data);
    }
    
    public function all()
    {
        $data = Teacher::all();
        return AllTeachers::collection($data);
    }
    
    public function detail($id,$day)
    {
        $data = Schedule::where(['teacher_id'=>$id,'day'=>$day])->orderBy('start_time','asc')->get();
        $teacher = Teacher::find($id);
        $lectures = DayScheduleDetail::collection($data);
        $teacher_d =new TeacherResource($teacher);
     return   $this->sendResponse(['teacher'=>$teacher_d,'schedules'=>$lectures],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTeacherRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTeacherRequest $request)
    {
        $data = $request->all();
        $data['password'] = Hash::make($request->password);
        $user = User::create($data);
        $data['user_id'] = $user->id;
        $teacher = Teacher::Create($data);
        return response()->json('teacher created',200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function show(Teacher $teacher)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function edit(Teacher $teacher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTeacherRequest  $request
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTeacherRequest $request, Teacher $teacher)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Teacher  $teacher
     * @return \Illuminate\Http\Response
     */
    public function destroy(Teacher $teacher)
    {
        //
    }
}
