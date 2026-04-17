<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Participant;
use Illuminate\Support\Str;

class Student2206205Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for ($i=0; $i<10; $i++) {
            Participant::create([
                'name' => 'Dummy participant '. ($i + 1),
                'email' => 'dummyparticipant '. ($i + 1) . '@example.com',
                'password' => Str::random(10)
            ]);
        }
    }
}
