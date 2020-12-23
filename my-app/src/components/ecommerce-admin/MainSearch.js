import React from 'react';


class MainSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="mainSearch">
                <form>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search" />
                </form>
               
            </div>
        )
    }
}

export default MainSearch;