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
// Movie Filter Sort
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import NowPlaying from './components/NowPlaying';
import Upcoming from './components/Upcoming';

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
						<Route path="/movie-page"><MoviePage /></Route>
						<Route path="/popular"><Popular /></Route>
						<Route path="/top-rated"><TopRated /></Route>
						<Route path="/now-playing"><NowPlaying /></Route>
						<Route path="/upcoming"><Upcoming /></Route>
						<Route><PageNotFound /></Route>
					</Switch>
					<Footer />
				</div>
			</Router>
		)
	}
}

export default AppRouter;