import React from 'react';
import FormProduct from './FormProduct'
import axios from 'axios';
import './styles.css'


const Modal = ({ callback, modalType, show, handleClose, endpoint, dataSelect }) => {

    const onSubmit = (event) => {
        event.preventDefault();

        let postBody = {
            title: event.target.name.value,
            description : event.target.description.value,
            id_category :  parseInt(event.target.category.value),
            price : 200
        };
        axios.post(endpoint, postBody)
            .then(res => {
                console.log(res)
                callback({product: res.data, id: res.data.id});
            })
    }

    const showHodeModal = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHodeModal}>
            <section className="modal-main">
                <FormProduct formType={modalType} onSubmit={onSubmit} dataSelect={dataSelect} />
                <button onClick={handleClose}>Cancel</button>
            </section>
        </div>
    )
}

export default Modal;