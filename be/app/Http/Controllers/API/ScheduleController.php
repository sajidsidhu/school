<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\API\StoreScheduleRequest;
use App\Models\Schedule;
use Auth;

class ScheduleController extends Controller
{
    public function store(StoreScheduleRequest $request)
    {
        $data = $request->all();
        $data['user_id'] = Auth::id();
        Schedule::create($data);
        return $this->sendResponse('Schedule saved',200);
    }
}
