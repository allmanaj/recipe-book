import React from 'react';
import axios from 'axios';

class SingleRecipe extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			recipe: {}
		}
	}

	componentDidMount(){
		axios.get('/api/recipes/' + this.props.match.params.id)
		.then((res) => {
			this.setState({recipe: res.data})
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
		});
	}

	render(){
		return (
			<div className="container">
				<div className="row mt-3">
					<div className="col-md-4">
						<h1>{this.state.recipe.title}</h1>
					</div>
				</div>
				<div className="row mt-3">
					<h5>Ingredients</h5>
					<div className="col-md-4">
						<ul className="list-group">
							{ console.log(this.state.recipe) }
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleRecipe;