import React from 'react';
import ProdusList from './ProdusList';
import Search from './Search';

class App extends React.Component {


  search(event) {
    console.log('searching for something');
    console.log(event.target.value);
    // TODO: state change aici cu noile produse
    this.setState((prevState) => {
      return {
        products: prevState.products.filter(x => x.titlu.indexOf(event.target.value) != -1)
      }
    });
  }

  constructor() {
    super();
    this.state = {
      products: [
        {
          titlu: "ursulet",
          pret: 100,
          inStock: true,
          categorie: "Plus"
        },
        {
          titlu: "Zebra",
          pret: 50,
          inStock: true,
          categorie: "Plus"
        },
        {
          titlu: "Dinozaur",
          pret: 15,
          inStock: false,
          categorie: "Plastic"
        },
        {
          titlu: "Masina",
          pret: 90,
          inStock: true,
          categorie: "Plastic"
        }
      ]
    }
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    // TODO: make API call
    console.log('cdm')
  }

  render() {
    return (
      <div className="App">
        <Search search={this.search} />
        <ProdusList produse={this.state.products} />
      </div>
    )
  }

}

export default App;
