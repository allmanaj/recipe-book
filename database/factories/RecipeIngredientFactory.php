<?php

use Faker\Generator as Faker;

$factory->define(App\RecipeIngredient::class, function (Faker $faker) {
    return [
        'recipe_id' => App\Recipe::all()->random()->id,
        'ingredient_id' => App\Ingredient::all()->random()->id,
    ];
});
