import React from 'react';
import Form from './Form'
import axios from 'axios';
import './styles.css'


const Modal = ({ callback, modalType, show, handleClose, endpoint, dataSelect }) => {

    const onSubmit = (event) => {
        event.preventDefault();

        if (modalType == 'PRODUCT') {
            let postBody = {
                title: event.target.name.value,
                description : event.target.description.value,
                id_category :  parseInt(event.target.category.value),
                price : 200
            };
            axios.post(endpoint, postBody)
                .then(res => {
                    console.log(res)
                    callback(res.data);
                })
        } else if (modalType == 'CATEGORY') {
            axios.post(endpoint, {
                name: event.target.title.value,
            })
                .then(res => {
                    console.log(res)
                    // callback(res.data);
                })
        }
         else {
            throw new Error('Undefined modal type');
        }
    }

    const showHodeModal = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHodeModal}>
            <section className="modal-main">
                <Form formType={modalType} onSubmit={onSubmit} dataSelect={dataSelect} />
                <button onClick={handleClose}>Cancel</button>
            </section>
        </div>
    )
}

export default Modal;