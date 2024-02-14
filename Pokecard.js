import React from 'react';
import './pokemon.css';
const POKEMON_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';



const pokecard =(pokemon) => {
    const pokeImage = `${POKEMON_API}${pokemon.id}.png`;
    return (<div className='Pokecard'>
                <div> {pokemon.name} </div>
                <div><img src={pokeImage}></img> </div>
                <div> Type: {pokemon.type} </div>
                <div> EXP: {pokemon.base_experience} </div>
            </div>
    );
}

export default  pokecard;