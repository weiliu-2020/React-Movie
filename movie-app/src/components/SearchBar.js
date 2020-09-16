import React from 'react';

class SearchBar extends React.Component {
    render(){
        return (
            <div class="search-bar">
                <input type="text"placeholder="Type your search here..." />
                <div class="search-icon">
                    <button>Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;