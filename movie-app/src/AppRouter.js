import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Components
import Header from './components/Header';

import Footer from './components/Footer';
// Pages
import Home from './components/Home';
import About from './components/About';
import Favourites from './components/Favourites';
import MoviePage from './components/MoviePage';
import PageNotFound from './components/PageNotFound';

class AppRouter extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					
					<Switch>
						<Route path="/" exact><Home /></Route>
						<Route path="/about"><About /></Route>
						<Route path="/favourites"><Favourites /></Route>
						<Route path="/moviepage"><MoviePage /></Route>
						<Route><PageNotFound /></Route>
					</Switch>
					<Footer />
				</div>
			</Router>
			
		)
	}
}

export default AppRouter;