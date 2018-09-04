<?php

use Illuminate\Database\Seeder;
use App\Ingredient;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
        	'salt',
			'pepper',
			'oil',
			'flour',
			'garlic',
			'sugar',
			'water',
			'onion',
			'olive',
			'chicken',
			'juice',
			'milk',
			'lemon',
			'butter',
			'egg',
			'cheese',
			'wheat',
			'vegetable',
			'vanilla',
			'vinegar',
			'parsley',
			'honey',
			'soy',
			'wine',
			'seeds',
			'celery',
			'rice',
			'cinnamon',
			'tomato',
			'bread',
			'eggs',
			'onions',
			'yeast',
			'leaves',
			'broth',
			'tomatoes',
			'cream',
			'cloves',
			'thyme',
			'peeled',
			'ginger',
			'beans',
			'soda',
			'basil',
			'mushrooms',
			'apple',
			'parmesan',
			'yogurt',
			'stock',
			'bell',
			'oats',
			'sodium',
			'beef',
			'flakes',
			'carrot',
			'oregano',
			'chocolate',
			'cumin',
			'paprika',
			'sesame',
			'mustard',
			'spinach',
			'corn',
			'potatoes',
			'coconut',
			'carrots',
			'nutmeg',
			'cilantro',
			'raisins',
			'chili',
			'syrup',
			'peas',
			'peanut',
			'almond',
			'walnuts',
			'canned',
			'lime',
			'leaf',
			'pineapple',
			'margarine',
			'cabbage',
			'cucumber',
			'broccoli',
			'cornstarch',
			'zucchini',
			'coriander',
			'paste',
			'turkey',
			'banana',
			'almonds',
			'nuts',
			'maple',
			'cheddar',
			'cider',
			'scallions',
			'lettuce',
			'dill',
        ];

        foreach($data as $item){
        	$i = new Ingredient;
        	$i->name = $item;
        	$i->save();
        }
    }
}