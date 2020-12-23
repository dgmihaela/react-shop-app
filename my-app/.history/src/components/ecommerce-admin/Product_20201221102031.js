import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';

const Product = ({getEditData, products, product}) => {
    [isChecked, setIsChecked] = useState("");

    function handleCheckbox(event) {
        // this.setState({isChecked: event.target.checked});
        setIsChecked(event.target.checked);
    }
    
    function hanldeDeleteProduct() {
    
        if(isChecked === true) {
    
            axios.delete(`http://localhost:9000/products/${product.id}`, ''
            )
            .then(res => {
                getEditData(res);
            })
        }
    }
}



class Product extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isChecked: ""
    //     }
        
    //     this.handleCheckbox = this.handleCheckbox.bind(this);
    //     this.hanldeDeleteProduct = this.hanldeDeleteProduct.bind(this)
    // }

    handleCheckbox(event) {
        this.setState({isChecked: event.target.checked});
    }

    hanldeDeleteProduct() {

        if(this.state.isChecked === true) {

            axios.delete(`http://localhost:9000/products/${this.props.product.id}`, ''
            )
            .then(res => {
                this.props.getEditData(res);
            })
        }
    }

    
    render() {
   
        return (
            <div className="product">
                <div><input type='checkbox' value={this.state.isChecked} onClick={this.handleCheckbox}/>
                {this.state.isChecked && 
                    <form>
                        <button type="button">Edit</button>  
                        <button type="button" onClick={this.hanldeDeleteProduct}>Delete</button>
                    </form>}
                </div>
                <h3>{this.props.product.title}</h3>
                <span>{this.props.product.description}</span>
            </div>
        )
    }
}

export default Product;