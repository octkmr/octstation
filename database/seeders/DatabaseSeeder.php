<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = User::factory()->create([
            'id' => 1,
            'name' => "octkmr",
            'email' => "octkmr@gmail.com",
        ]);
        Post::factory(3)->create([
            'user_id' => $user->id,
        ]);
    }
}
