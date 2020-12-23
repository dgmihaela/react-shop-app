import React, { useState } from 'react';

const Form = ({onSubmit, dataSelect }) => {

    const [optionIndex, setOptionIndex] = useState(' ');

    let handleChange = (event) => {
        console.log('changed option: ', event.target.value);
        setOptionIndex(event.target.value);
       
    }

        let categories = dataSelect;
        console.log('dataselect',dataSelect);
        let firstId = null;
        if(categories.length > 0){
            firstId = categories[0].id;
        }
        let categoryOptions = categories.map((cat) => {
  
            return <option value={cat.id} key={cat.id} >{cat.name}</option>
        });
   
        
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

export default Form;