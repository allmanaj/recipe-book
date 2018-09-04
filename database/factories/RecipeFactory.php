<?php

use Faker\Generator as Faker;
use App\Recipe;

$factory->define(Recipe::class, function (Faker $faker) {
    return [
        'title' => $faker->colorName,
        'method' => $faker->paragraph,
    ];
});
