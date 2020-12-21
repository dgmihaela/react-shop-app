import React, { useState, useEffect  } from 'react';

import axios from 'axios';
import Category from './Category';
import Modal from "./Modal";
import MainBtns from './MainBtns';
import MainSearch from "./MainSearch";




function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const [showProduct, setShowProduct] = useState(false);


    useEffect(() => {

        console.log('retrieving categories');
        axios.get('http://localhost:9000/categories')
            .then(res => {
                console.log('categories: ', res);

                // this.setState({
                //     categories: res.data
                // })
                setCategories(res.data);
            });
    }, []);

    function showModal(whichModal) {
        switch (whichModal) {
            case 'CATEGORY':
                // this.setState({ show: true })
                setShow(true);
                break;
            case 'PRODUCT':
                // this.setState({ showProduct: true })
                setShowProduct(true);
                break;
            default:
                throw new Error('Unavailable option');
        }


    }
    function hideModal() {
        // this.setState({ show: false, showProduct: false })
        setShowProduct(false)
        setShowProduct(false);
    }

    function getModalData(category) {
        console.log('new category: ', category);
        this.hideModal();
        setCategories([...categories, category]);
        // this.setState((state) => {
        //     return {
        //         categories: [...state.categories, category]
        //     }
        // })
    }

    function callbackDeletedCategory(categoryId) {
        console.log('CategoryList::callbackDeletedCategory - ', categoryId);
        let filteredCategories = categories.filter(x => x.id != categoryId);
        // this.setState((prevState) => ({
        //     categories: filteredCategories
        // }));
        setCategories(filteredCategories);
    }

    let categoryComponents = categories.map(categoryObject => <Category callback={getModalData} category={categoryObject} key={categoryObject.id} callbackDeletedCategory={callbackDeletedCategory} />);
    return (

        <div className="categoryist">
            
            <h2>CategoryList</h2>
            <Modal callback={getModalData} modalType="CATEGORY" show={show} handleClose={hideModal} endpoint={'http://localhost:9000/categories'} dataSelect={null} />
            <Modal callback={getModalData} modalType="PRODUCT" show={showProduct} handleClose={hideModal} endpoint={'http://localhost:9000/products'} dataSelect={categories} />
            <MainBtns show={showModal} />
            {categoryComponents}

        </div>
    )
}


export default CategoryList;