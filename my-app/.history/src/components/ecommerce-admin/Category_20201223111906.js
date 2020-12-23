import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import './styles.css'
import ModalEditCategory from './ModalEditCategory';
import {selectProducts, getProducts } from '../../slices/productsSlice';

const Category = ({ category, callbackDeletedCategory }) => {
    const [products, setProducts] = useState([]);
    const [showBtns, setShowBtns] = useState(false);
    const [showEditModalFlag, setShowEditModalFlag] = useState(false);

    const allProducts = useSelector(selectProducts);
    const selectedProducts = allProducts[category.id] || []
    const dispatch = useDispatch();

    function showBtnsToggle() {
        setShowBtns(!showBtns)
    }

    function showModalEdit() {
        setShowEditModalFlag(true);
    }

    function hideModalEdit() {
        setShowEditModalFlag(false);
    }

    // useEffect(() => {
    //     axios.get(`http://localhost:9000/products?id_category=${category.id}`)
    //         .then(res => {
    //             console.log('cand luam produsele pt o categ',res.data)
    //             dispatch(getProducts({products: res.data, id: category.id}));
    //         })
    // }, []);


    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get(`http://localhost:9000/products?id_category=${category.id}`)

        dispatch(getProducts({products: result.data, id: category.id}));
        };
        
        fetchData();
        
        }, []);

    function deleteCategory(idCateg) {

        let prodArray = products; // .filter(prod => prod.id_category === this.props.category.id);
        let promises = [];
        let promise;
        let debug = true;

        // useEffect(() => {
        if (debug) {
            axios.delete(`http://localhost:9000/categories/${idCateg}`)
                .then(res => {
                    console.log('res ok: ', res);
                    callbackDeletedCategory(idCateg);
                }).catch(err => {
                    console.log('err: ', err);
                })
        }

        if (!debug) {
            prodArray.forEach(prod => {
                promise = axios.delete(`http://localhost:9000/products/${prod.id}`, ''
                )
                promises.push(promise);
            });

            Promise.all(promises).then((values) => {
                axios.delete(`http://localhost:9000/categories/${idCateg}`)
                    .then(res => {
                        console.log('res ok: ', res);

                    }).catch(err => {
                        console.log('err: ', err);
                    })
            });
        }
        // })
    }

    function getEditData(updatedProduct) {

        let indexOfOld = -1;
        for (let op of selectedProducts) {
            if (op.id == updatedProduct.id) {
                indexOfOld = selectedProducts.indexOf(op);
                break;
            }
        }
        let copyOldProducts = [...selectedProducts];
        copyOldProducts[indexOfOld] = updatedProduct;

        // setProducts(copyOldProducts);
        dispatch(updateProducts(copyOldProducts))
    }

    function handleCheckbox(){
        console.log('handling checkbox');
    }

    let productsComponents = selectedProducts.map(prodObject => <Product getEditData={getEditData} onClick={handleCheckbox} product={prodObject} key={prodObject.id} />);
   
    return (
        <div className="category">
            {!showBtns && <button onClick={showModalEdit}>Edit category</button>}
            <ModalEditCategory getEditData={getEditData} initialProducts={selectedProducts} showEditModalFlag={showEditModalFlag} hideModalEdit={hideModalEdit} />
            {!showBtns && <button onClick={() => deleteCategory(category.id)}>Delete category</button>}
            <div onClick={showBtnsToggle}>
                <div className="category-title"><h2>Category: <span style={{ color: 'blue' }}>{category.name}</span> </h2></div>
                {productsComponents}
            </div>
        </div>
    )
}

export default Category;