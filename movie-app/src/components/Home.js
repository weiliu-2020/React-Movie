import React from 'react';
import MovieGrid from './MovieGrid';

class Home extends React.Component {
    render() {
        return (
        <main>
            <section>
                <h2>Home Page</h2>
                <MovieGrid />
            </section>
        </main>
        );
    }
}

export default Home;