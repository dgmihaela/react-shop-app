import React from 'react';
import Modal from './Modal'

class MainBtns extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MainBtns">
                <button type='button' onClick={() => this.props.show('CATEGORY')}>ADD Category</button>
                <button type='button' onClick={() => this.props.show('PRODUCT')}>ADD Product</button>
            </div>
        )
    }
}

export default MainBtns;