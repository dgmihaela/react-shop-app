import React from 'react';
import ProdusList from './ProdusList';
import Search from './Search';
import Mock from './Mock';

class SearchListMain extends React.Component {

    search(event) {
        console.log('searching for something');
        console.log(event.target.value);
        // TODO: state change aici cu noile produse
        this.setState((prevState) => {
            return {
                products: prevState.products.filter(x => x.titlu.indexOf(event.target.value) != -1)
            }
        });
    }

    constructor() {
        super();
        this.state = {
            products: Mock
        }
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        // TODO: make API call
        console.log('cdm')
    }

    render() {
        return (
            <div className="SearchListMain">
                <Search search={this.search} />
                <ProdusList produse={this.state.products} />
            </div>
        )
    }

}

export default SearchListMain;