<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Participant;

class Student2206205Controller extends Controller
{
    //
    public function addParticipant(Request $request) {
        $data=$request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:participants,email',
            'password' => 'required',
        ]);

        Participant::create($data);
        return redirect('/');
    }


    public function index() {
        return Participant::all();
    }

    public function store(Request $request) {
        return Participant::create($request->all());
    }

    public function update(Request $request, $id) {
        $participant=Participant::findOrFail($id);
        $participant->update($request->all());
        return $participant;
    }

    public function destroy($id) {
        $participant = Participant::findOrFail($id);
        $participant->delete();
        return 204;
    }
}
