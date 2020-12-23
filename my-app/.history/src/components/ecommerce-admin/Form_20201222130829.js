import React from 'react';

const Form = ({onSubmit }) => {

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