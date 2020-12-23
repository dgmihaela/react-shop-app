import Axios from 'axios';
import React from 'react';
import Form from './Form'
import axios from 'axios';
import './styles.css'


const ModalProduct = ({ callback, show, handleClose, endpoint }) => {

    console.log('get modal data: ', callback);
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.title.value);

        const title = event.target.title.value;

        axios.post(endpoint, {
            name: event.target.title.value,
        })
            .then(res => {
                console.log(res)
                // if(getModalData !== undefined) {
                callback(res.data);
            }
            )

    }

    const showHodeModal = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHodeModal}>
            
            <section className="modal-main">
                <Form  onSubmit={onSubmit} />
                <button onClick={handleClose}>Cancel Product</button>
            </section>
        </div>
    )

}

export default ModalProduct;