import React from "react";
import { Link } from "react-router-dom";

class PokemonIndexItem extends React.Component {
    render(){
        const {id, name, image_url} = this.props;
        return (
          <Link to="/pokemon/:pokemonId">
            <div>
              {id} <span> </span>
              <img src={image_url} style={{ width: "15px" }} alt={name} />
              <span> </span>
              {name}
            </div>
          </Link>
        );
    }
}

export default PokemonIndexItem;