import React from 'react';

function Produs(props){

    // let categorie = props.categorie;
    let red = {
        color : 'red'
    };
    return (

        <div >
            <h3 style={props.produs.inStock ? {} : red}>{props.produs.titlu}</h3>
            
            Pret: {props.produs.pret}
            
        </div>
    );
}

export default Produs;