import React, { useState } from 'react';

const Form = ({ formType, onSubmit, dataSelect }) => {

    const [optionIndex, setOptionIndex] = useState(' ');

    let handleChange = (event) => {
        console.log('changed option: ', event.target.value);
        setOptionIndex(event.target.value);
       
    }

    if (formType == 'CATEGORY') {
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
    if (formType == 'PRODUCT') {
        let categories = dataSelect;
        console.log = dataSelect;
        let firstId = null;
        if(categories.length > 0){
            firstId = categories[0].id;
        }
        let categoryOptions = categories.map((cat) => {
  
            return <option value={cat.id} key={cat.id} >{cat.name}</option>
        });
        console.log('selectul',optionIndex)
        
        return (<form onSubmit={onSubmit}>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" value={optionIndex} onChange={handleChange}>
                    {categoryOptions}
                </select>
                <label htmlFor="name">Name of Product</label>
                <input id="name" />
                <label htmlFor="description">Description of Product</label>
                <input id="description" />

            </div>
            <button type="submit">Save</button>
        </form>);
    }
    throw new Error('Unknown form type');
}

export default Form;