import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import './styles.css'
import ModalEditCategory from './ModalEditCategory';


function Category({category, callbackDeletedCategory}) {
    const [products, setProducts] = useState([]);
    const [showBtns, setShowBtns] = useState(false);
    const [showEditModalFlag, setShowEditModalFlag] = useState(false);
    const [isChecked, setIsChecked] = useState(false);


    function showBtnsToggle() {
        // this.setState({ showBtns: !this.state.showBtns })
        setShowBtns(!this.state.showBtns )
    }

    function showModalEdit() {
        // this.setState({
        //     showEditModalFlag: true
        // });
        setShowEditModalFlag(true);
    }

    function hideModalEdit() {
        // this.setState({
        //     showEditModalFlag: false
        // });
        setShowEditModalFlag(false);
    }

    useEffect(() => {
        axios.get(`http://localhost:9000/products?id_category=${category.id}`)
        .then(res => {
            // this.setState({
            //     products: res.data
            // })
            setProducts(res.data)
        })
    });

    function deleteCategory(idCateg) {

        let prodArray = products; // .filter(prod => prod.id_category === this.props.category.id);
        let promises = [];
        let promise;
        let debug = true;

            useEffect(() => {
                if (debug) {
                    axios.delete(`http://localhost:9000/categories/${idCateg}`)
                    .then(res => {
                        console.log('res ok: ', res);
                        this.props.callbackDeletedCategory(idCateg);
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
            })
        } 

        function getEditData(updatedProduct) {

            console.log('dddd')
            console.log('get edit data: ', updatedProduct);
          
            // let indexOfOldTest = this.state.products.indexOf(updatedProduct);
    
            let indexOfOld = -1;
            for (let op of products) {
                if (op.id == updatedProduct.id) {
                    indexOfOld = products.indexOf(op);
                    break;
                }
            }
            let copyOldProducts = [...products];
            copyOldProducts[indexOfOld] = updatedProduct;
            // this.setState(() => {
            //     return {
            //         products: copyOldProducts
            //     }
            // })
            setProducts(copyOldProducts)
        }

        let productsComponents = products.map(prodObject => <Product getEditData={getEditData} products={products} onClick={handleCheckbox} product={prodObject} key={prodObject.id} />);

        return (
            <div className="category">
                {!showBtns && <button onClick={showModalEdit}>Edit category</button>}
                <ModalEditCategory getEditData={getEditData} products={products} showEditModalFlag={showEditModalFlag} hideModalEdit={hideModalEdit} />
                {!showBtns && <button onClick={() => deleteCategory(category.id)}>Delete category</button>}
                <div onClick={showBtnsToggle}>
                    <div className="category-title"><h2>Category: <span style={{ color: 'blue' }}>{category.name}</span> </h2></div>
                    {productsComponents}
                </div>
            </div>
        )
    }


// class Category extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: [],
    //         showBtns: false,
    //         showEditModalFlag: false,
    //         isChecked: false,

    //     }
    //     this.showBtnsToggle = this.showBtnsToggle.bind(this);
    //     this.deleteCategory = this.deleteCategory.bind(this);
    //     this.showModalEdit = this.showModalEdit.bind(this);
    //     this.getEditData = this.getEditData.bind(this);
    //     this.hideModalEdit = this.hideModalEdit.bind(this);
    // }

    // showBtnsToggle() {
    //     this.setState({ showBtns: !this.state.showBtns })
    // }

    // showModalEdit() {
    //     this.setState({
    //         showEditModalFlag: true
    //     });
    // }

    // hideModalEdit() {
    //     this.setState({
    //         showEditModalFlag: false
    //     });
    // }

    // componentDidMount() {
    //     axios.get(`http://localhost:9000/products?id_category=${this.props.category.id}`)
    //         .then(res => {
    //             this.setState({
    //                 products: res.data
    //             })
    //         })
    // }
    // deleteCategory(idCateg) {

    //     let prodArray = this.state.products; // .filter(prod => prod.id_category === this.props.category.id);
    //     let promises = [];
    //     let promise;
    //     let debug = true;

    //     if (debug) {
    //         axios.delete(`http://localhost:9000/categories/${idCateg}`)
    //             .then(res => {
    //                 console.log('res ok: ', res);
    //                 // this.setState({
    //                 //     products: []
    //                 // })
    //                 this.props.callbackDeletedCategory(idCateg);
    //                 // return res;
    //             }).catch(err => {
    //                 console.log('err: ', err);
    //             })
    //     }

    //     if (!debug) {
    //         prodArray.forEach(prod => {
    //             promise = axios.delete(`http://localhost:9000/products/${prod.id}`, ''
    //             )
    //             // .then(res => {
    //             //     return res;
    //             // })
    //             promises.push(promise);
    //         });

    //         Promise.all(promises).then((values) => {
    //             axios.delete(`http://localhost:9000/categories/${idCateg}`)
    //                 .then(res => {
    //                     console.log('res ok: ', res);
    //                     // this.setState({
    //                     //     products: []
    //                     // })
    //                     // this.props.callbackDeletedCategory(idCateg);
    //                     // return res;
    //                 }).catch(err => {
    //                     console.log('err: ', err);
    //                 })
    //         });
    //     }
    // }

    // getEditData(updatedProduct) {
    //     console.log('get edit data: ', updatedProduct);

    //     // let indexOfOldTest = this.state.products.indexOf(updatedProduct);

    //     let indexOfOld = -1;
    //     for (let op of this.state.products) {
    //         if (op.id == updatedProduct.id) {
    //             indexOfOld = this.state.products.indexOf(op);
    //             break;
    //         }
    //     }
    //     let copyOldProducts = [...this.state.products];
    //     copyOldProducts[indexOfOld] = updatedProduct;
    //     //let productsWithoutOldProduct = this.state.products.filter(x => x.id != updatedProduct.id);
    //     this.setState((state) => {
    //         return {
    //             products: copyOldProducts
    //         }
    //     })
    // }


    // render() {
    //     console.log('CATEGORY RENDER');
    //     let prodByCateg = [...this.state.products];//this.state.products.filter(prod => this.props.category.id === prod.id_category);
    //     let productsComponents = products.map(prodObject => <Product getEditData={this.getEditData} products={products} onClick={this.handleCheckbox} product={prodObject} key={prodObject.id} />);

    //     return (
    //         <div className="category">
    //             {!this.state.showBtns && <button onClick={this.showModalEdit}>Edit category</button>}
    //             <ModalEditCategory getEditData={this.getEditData} products={this.state.products} showEditModalFlag={this.state.showEditModalFlag} hideModalEdit={this.hideModalEdit} />
    //             {!this.state.showBtns && <button onClick={() => this.deleteCategory(this.props.category.id)}>Delete category</button>}
    //             <div onClick={this.showBtnsToggle}>
    //                 <div className="category-title"><h2>Category: <span style={{ color: 'blue' }}>{this.props.category.name}</span> </h2></div>
    //                 {productsComponents}
    //             </div>
    //         </div>
    //     )
    // }
// }

export default Category;