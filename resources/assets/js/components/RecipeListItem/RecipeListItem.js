import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItem = (props) => {
	return (
		<li className="list-group-item">
			<Link to={'/recipes/' + props.recipe.id }>
				{props.recipe.title}
			</Link>
		</li>
	)
}

export default RecipeListItem;