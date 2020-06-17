import React from 'react'
import './Style.css'

const PokemonDetails = (props) => {
  const { pokemon } = props.location.state
  return (
    <div className='details'>
      <span className='datos'>{pokemon.name}</span><br />
      <span className='datos'>Número en Pokédex: {pokemon.number}</span><br />
      <span className='datos'>
        <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokemon.number + '.png'} alt='pokemon' />
      </span><br />
    </div>
  )
}

export default PokemonDetails
