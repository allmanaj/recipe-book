import React from 'react';

class Search extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return (

			<div className="card col-md-12 mt-3 p-0">
				<div className="card-body p-3">
					<h5 className="card-title">Search</h5>
					<div className="input-group col-md-12 mb-0 p-0">
						<input type="text" className="form-control" placeholder="Find a Recipe..." onChange={this.onChange}/>
						<div className="input-group-append">
				    		<button className="btn btn-outline-secondary" type="button" data-toggle="modal" data-target="#createRecipeModal">Add</button>
					  	</div>
					</div>
				</div>
			</div>
		);
	}

	onChange = (event) => {
		this.props.search(event.target.value);
	};
}

export default Search;