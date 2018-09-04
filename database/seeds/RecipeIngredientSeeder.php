<?php

use Illuminate\Database\Seeder;

class RecipeIngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\RecipeIngredient::class, 50)->create();
    }
}
