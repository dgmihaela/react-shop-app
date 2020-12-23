import React, { useState, useEffect, useCallback  } from 'react';
import axios from 'axios';
import Category from './Category';
import Modal from "./Modal";
import ModalProduct from './ModalProduct';
import MainBtns from './MainBtns';
import { useSelector, useDispatch } from 'react-redux';
import {selectCategory, addCategory, getCategories, deleteCategories} from '../../slices/categorySlice';
import { selectProducts, addProducts } from '../../slices/productsSlice';

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const [showProduct, setShowProduct] = useState(false);

    // redux
    const CategoriesSelect = useSelector(selectCategory);

    console.log('lista categorii din store', CategoriesSelect)
    const dispatch = useDispatch();

    // ./redux

    useEffect(() => {
        axios.get('http://localhost:9000/categories')
            .then(res => {
                // this.setState({
                //     categories: res.data
                // })
                // setCategories(res.data);
                dispatch(getCategories(res.data));
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
        setShowProduct(false);
    }

    const getModalData = useCallback(
        category => {
            hideModal();
            // setCategories([...categories, category]);
            dispatch(addCategory(category));
    
            // this.setState((state) => {
            //     return {
            //         categories: [...state.categories, category]
            //     }
            // })
        }, [])

    const getProductsData = useCallback(
        product => {
            hideModal();
            dispatch(addProducts(product));
        },[]) 

    function callbackDeletedCategory(categoryId) {
        let filteredCategories = CategoriesSelect.filter(x => x.id != categoryId);
        // this.setState((prevState) => ({
        //     categories: filteredCategories
        // }));
        setCategories(filteredCategories);
        // dispatch(deleteCategories(filteredCategories));
    }

    let categoryComponents = CategoriesSelect.map(categoryObject => <Category category={categoryObject} key={categoryObject.id} callbackDeletedCategory={callbackDeletedCategory} />);
    return (
        <div className="categoryist">
            <h2>CategoryList</h2>
            <Modal callback={getModalData} show={show} handleClose={hideModal} endpoint={'http://localhost:9000/categories'} dataSelect={null} />
            <ModalProduct callback={getProductsData} show={showProduct} handleClose={hideModal} endpoint={'http://localhost:9000/products'} dataSelect={CategoriesSelect} />
            <MainBtns show={showModal} />
            {categoryComponents}
        </div>
    )
}


export default CategoryList;