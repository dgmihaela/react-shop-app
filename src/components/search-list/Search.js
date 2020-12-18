import React from 'react';

class Search extends React.Component{

    // search();
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Search</h3>
                <input onChange={this.props.search} />
            </div>
        );
    }

}

export default Search;