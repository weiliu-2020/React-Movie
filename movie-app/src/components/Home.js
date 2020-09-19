import React from 'react';
import MovieGrid from './MovieGrid';
import SearchBar from './SearchBar';
import TitleFilter from './TitleFilter';

class Home extends React.Component {
    render() {
        return (
        <main>
            <section>
                <SearchBar />
                <TitleFilter />
                <MovieGrid />
            </section>
        </main>
        );
    }
}

export default Home;