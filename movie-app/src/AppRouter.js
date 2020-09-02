import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

class AppRouter extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<Nav />
				<Footer />
			</div>
		)
	}
}

export default AppRouter;