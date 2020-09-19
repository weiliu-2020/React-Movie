import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {APP_FOLDER_NAME} from './globals/variables';
// Components
import Navbar from './components/Navbar/Navbar';

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
			<Router basename = {APP_FOLDER_NAME}>
				<div>
				<Navbar />
					
					
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