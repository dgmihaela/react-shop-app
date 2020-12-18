import React from 'react';
import Produs from './Produs';

class Categorie extends React.Component{

    constructor(props){
        super(props);
        console.log('categorie: ', this.props.titluCategorie);
        console.log('produse: ', this.props.produse);
    }

    render(){
       let produseComponents = this.props.produse.map(prod => <Produs produs={prod} key={prod.titlu}/>);

        return (
            <div>
                <h2>Categorie: {this.props.titluCategorie}</h2>
                {produseComponents}
                <hr/>
            </div>
        );
    }
}

export default Categorie;