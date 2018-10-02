import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RecipeListItem from '../RecipeListItem/RecipeListItem';
import Search from '../Search/Search';
import RecipeCreationModal from '../RecipeCreationModal/RecipeCreationModal';

class RecipeList extends React.Component{

	constructor(){
		super()
		this.state = {
			recipes: []
		}
	}

	componentDidMount(){
		axios.get('/api/recipes')
		.then(recipes => {
			this.setState({recipes: recipes.data})
		})
		.catch(err => {
			console.error(err);
		});
	}

	render(){
		return (
			<div className="container mb-5">
				<div className="row">
					<Search search={this.search}/>
				</div>
				<div className="row mt-3">
					<div className="col-md-12">
						<ul className="list-group">
						{
							this.state.recipes.map((recipe, index) => <RecipeListItem key={index} recipe={recipe}/>)
						}
						</ul>
					</div>
				</div>
				<RecipeCreationModal updateRecipes={this.updateRecipes}/>
			</div>
		)
	}

	updateRecipes = (recipe) => {
		this.recipes.push(recipe);
	}

	search = (val) => {
		let recipes = this.recipes.filter(recipe => recipe.title.toLowerCase().includes(val.toLowerCase()));
		this.setState({recipes:recipes});
	}
}

export default RecipeList;