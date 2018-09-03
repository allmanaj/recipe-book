<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recipe;

class RecipeController extends Controller
{
    
	public function index(){
		return Recipe::all();
	}

	public function view(Recipe $recipe){
		return $recipe;
	}

	public function store(Request $request){

		$validatedData = $request->validate([
	        'title' => 'required|max:255',
	        'method' => 'required',
	        'ingredients' => 'required',
	    ]);

		$data = $request->all();

		$r = new Recipe;
		$r->title = $data['title'];
		$r->method = $data['method'];
		$r->ingredients = $data['ingredients'];
		$r->save();

		return $r;

	}

}
