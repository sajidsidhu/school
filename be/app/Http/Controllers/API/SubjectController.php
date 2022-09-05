<?php

namespace App\Http\Controllers\API;

use App\Models\Subject;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\StoreSubjectRequest;
use Auth;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $subjects =  Subject::all();
        return $this->sendResponse($subjects,200);
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
     * @param  \App\Http\Requests\StoreSubjectRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSubjectRequest $request)
    {
        $data = $request->all();
        $data['user_id'] = Auth::id();
        Subject::create($data);
        return $this->sendResponse('subject saved',200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Subject  $Subject
     * @return \Illuminate\Http\Response
     */
    public function show(Subject $Subject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Subject  $Subject
     * @return \Illuminate\Http\Response
     */
    public function edit(Subject $Subject)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSubjectRequest  $request
     * @param  \App\Models\Subject  $Subject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subject $Subject)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Subject  $Subject
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subject $Subject)
    {
        //
    }
}
