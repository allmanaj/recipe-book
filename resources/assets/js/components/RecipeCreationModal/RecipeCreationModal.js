import React from 'react';
import axios from 'axios';

class RecipeCreationModal extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			title: '',
			method: '',
			ingredients: ''
		}
	}

	render(){
		return (
			<div className="modal" id="createRecipeModal" tabIndex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">New Recipe</h5>
						</div>
						<div className="modal-body">
							<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<label htmlFor="title">Title</label>
									<input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleTitleChange} />
								</div>
								<div className="form-group">
									<label htmlFor="method">Method</label>
									<input type="text" name="method" className="form-control" value={this.state.method} onChange={this.handleMethodChange} />
								</div>
								<div className="form-group">
									<label htmlFor="ingredients">Ingredients</label>
									<input type="text" name="ingredients" className="form-control" value={this.state.ingredients} onChange={this.handleIngredientsChange}/>
								</div>
								<button className="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}

	onSubmit = (event) => {
		event.preventDefault();
		axios.post('/api/recipes/new', this.state)
		.then((res) => {
			this.props.updateRecipes(res.data);
			this.setState({
				title: '',
				method: '',
				ingredients: ''
			});
			$('#createRecipeModal').modal('hide');
		})
		.catch((err) => {
			console.error(err);
		});
	}

	handleTitleChange = (event) => {
		this.setState({title: event.target.value});
	}

	handleMethodChange = (event) => {
		this.setState({method: event.target.value});
	}

	handleIngredientsChange = (event) => {
		this.setState({ingredients: event.target.value});
	}
}

export default RecipeCreationModal;