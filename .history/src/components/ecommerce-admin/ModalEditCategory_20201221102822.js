import React from 'react';
import './styles.css'
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';

const ModalEditCategory = ({getEditData, products, showEditModalFlag, hideModalEdit}) => {
    [products, setProducts] = useState(...products);

    function handleChangeEdit(event, i, type) {

        const newProducts = [...products];

        if(type === 'title'){
            newProducts[i].title = event.target.value;
        }
        if(type === 'description'){
            newProducts[i].description = event.target.value;
        }
        // this.setState({
        //     products: newProducts
        // })   
        setProducts(newProducts);
    }

    function onSubmitEdit(e) {
        e.preventDefault();

        products.forEach(prod => {   
            // console.log('fff')
            console.log('llll')
    
            console.log('prod: ', prod);
            useEffect(() => {
                axios.put(`http://localhost:9000/products/${prod.id}`, {
                title : prod.title,
                description: prod.description,
                id_category: prod.id_category
                })
                .then(res => {
                    getEditData(res.data);
                })
            })
            
        });
    }


    const showEditModal = showEditModalFlag ? 'modal display-block' : 'modal display-none';
    console.log('products loaded in modal edit category: ', products);
    let formGenerate = products.map((prodItem, i) => 
        <div key={prodItem.id}>
            <p>Product</p>
            <input type='text' onChange={(e)=>handleChangeEdit(e, i, "title")} value={prodItem.title} />
            <input type="text" onChange={(e)=>handleChangeEdit(e, i, "description")} value={prodItem.description} />
        </div>
        )
    
    return (
        <div className={showEditModal}>
            <section className="modal-main">
            <div>Modala edit</div>
            <form onSubmit={onSubmitEdit}>
                {formGenerate}
                <button>Save</button>
            </form>
            <button onClick={hideModalEdit}>Cancel</button>
            </section>
        </div>
    )

}


// class ModalEditCategory extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: [...props.products],
//         }
//         this.handleChangeEdit = this.handleChangeEdit.bind(this);
//         this.onSubmitEdit = this.onSubmitEdit.bind(this);
//     }

//     handleChangeEdit(event, i, type) {

//         const newProducts = [...this.props.products];

//         if(type === 'title'){
//             newProducts[i].title = event.target.value;
//         }
//         if(type === 'description'){
//             newProducts[i].description = event.target.value;
//         }
//         this.setState({
//             products: newProducts
//         })   
//     }

//     onSubmitEdit(e) {
//         e.preventDefault();

//         this.state.products.forEach(prod => {   
//             // console.log('fff')
//             console.log('llll')
    
//             console.log('prod: ', prod);
//             axios.put(`http://localhost:9000/products/${prod.id}`, {
//                 title : prod.title,
//                 description: prod.description,
//                 id_category: prod.id_category
//             })
//                 .then(res => {
//                     this.props.getEditData(res.data);
//                 })
//         });
//     }

//     render() {
//         const showEditModal = this.props.showEditModalFlag ? 'modal display-block' : 'modal display-none';
//         console.log('products loaded in modal edit category: ', this.props.products);
//         let formGenerate = this.props.products.map((prodItem, i) => 
//             <div key={prodItem.id}>
//                 <p>Product</p>
//                 <input type='text' onChange={(e)=>this.handleChangeEdit(e, i, "title")} value={prodItem.title} />
//                 <input type="text" onChange={(e)=>this.handleChangeEdit(e, i, "description")} value={prodItem.description} />
//             </div>
//             )
        
//         return (
//             <div className={showEditModal}>
//                 <section className="modal-main">
//                 <div>Modala edit</div>
//                 <form onSubmit={this.onSubmitEdit}>
//                     {formGenerate}
//                     <button>Save</button>
//                 </form>
//                 <button onClick={this.props.hideModalEdit}>Cancel</button>
//                 </section>
//             </div>
//         )
//     }
    
    
// }

export default ModalEditCategory;