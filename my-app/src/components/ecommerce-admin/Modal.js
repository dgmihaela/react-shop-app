import React from 'react';
import Form from './Form'
import axios from 'axios';
import './styles.css'


const Modal = ({ callback, modalType, show, handleClose, endpoint, dataSelect }) => {

    const onSubmit = (event) => {
        event.preventDefault();

        axios.post(endpoint, {
            name: event.target.title.value,
        })
            .then(res => {
                console.log(res)
                callback(res.data);
            })
       
    }

    const showHodeModal = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHodeModal}>
            <section className="modal-main">
                <Form onSubmit={onSubmit} dataSelect={dataSelect} />
                <button onClick={handleClose}>Cancel</button>
            </section>
        </div>
    )
}

export default Modal;