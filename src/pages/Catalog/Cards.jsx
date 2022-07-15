import React from 'react'
import { connect } from 'react-redux';

function Cards(props) {
  return (
    <div>
        <div class="cards">
            <div class="card" key={props.name}>
                <img src={props.pokemon.image}/>
                <p>{props.pokemon.name}</p>
            </div>
        </div>
    </div>
  )
}

const mstp = (state) => {
    return {
      pokemon: state.pkr.pokemon
    };
  };

  export default connect(mstp, {})(Cards);