import React from 'react';
import Produs from './Produs'
import Categorie from './Categorie'

class ProdusList extends React.Component{



    constructor(props){
        super(props);
        console.log('Produse: ', this.props.produse);
        // this.produseInitiale = this.props.produse;
    }

    render() {
        
        // let produseComponents = this.props.produse.map(prod => <Produs produs={prod} key={prod.titlu}/>);
        let categoriiProduse = new Map();
        this.props.produse.forEach(prod => {
            if(categoriiProduse.has(prod.categorie)){
                categoriiProduse.get(prod.categorie).push(prod);
            }else{
                // daca nu exista categoria in map yet
                categoriiProduse.set(prod.categorie, [prod]);
            }
        });

        console.log('Categorii produse: ', categoriiProduse);
        let categoriiComponents = [];
        for(let [numeCategorie, arrProduse] of categoriiProduse.entries()){
            categoriiComponents.push(<Categorie titluCategorie={numeCategorie} produse={arrProduse} key={numeCategorie}/>);
        }
        return(
            <div>
                <h2>Produse list here</h2>        
                <div>
                    {categoriiComponents}
                </div>
            </div>
        );
    }


}

export default ProdusList;