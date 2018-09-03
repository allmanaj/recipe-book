<?php

use Illuminate\Database\Seeder;
use App\Recipe;

class RecipesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	factory(App\Recipe::class, 50)->create();
    }
}
