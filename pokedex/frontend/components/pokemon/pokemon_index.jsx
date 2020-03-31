import React from 'react';
import PokemonIndexItem from "./pokemon_index_item";


// Inside of componentDidMount, call this.props.requestAllPokemon
// Import the container component to root.jsx.
// Nest and render a <PokemonIndexContainer /> within your <Root /> component.


class PokemonIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        const pokeList = this.props.pokemon.map((pokemon) => {
            const {id, name, image_url} = pokemon; 
            return (
              <li key={Math.random() * id}>
                  <PokemonIndexItem id={id} name={name} image_url={image_url} />
              </li>
            );
        });
        // debugger;
        return <ul className="pokedex">{pokeList}</ul>;
    }
}

export default PokemonIndex;