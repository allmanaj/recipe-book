import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Fade } from 'react-router-dom';
import Header from './Header/Header';
import RecipeList from './RecipeList/RecipeList';
import SingleRecipe from './SingleRecipe/SingleRecipe';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
          	<Route exact path='/' component={RecipeList} />
          	<Route exact path='/recipes/:id' component={SingleRecipe} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))