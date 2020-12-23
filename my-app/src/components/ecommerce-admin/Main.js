import React from 'react';
import CategoryList from './CategoryList';
import MainSearch from './MainSearch';
import MainBtns from './MainBtns';


class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="Main">
               
                <CategoryList categories={this.props.categories} onFilterChange={this.handleFilterText} />
            </div>
        )
    }
}

export default Main;