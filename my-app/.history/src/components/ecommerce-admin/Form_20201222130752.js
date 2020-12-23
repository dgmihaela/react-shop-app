import React, { useState } from 'react';

const Form = ({onSubmit }) => {

    const [optionIndex, setOptionIndex] = useState(' ');

    let handleChange = (event) => {
        setOptionIndex(event.target.value); 
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="title">Title of category</label>
                <input id="title" />
            </div>
            <button type="submit">Save</button>
        </form>
    )
}

export default Form;