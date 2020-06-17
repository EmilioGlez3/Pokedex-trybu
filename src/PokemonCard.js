import React from 'react'
import './Style.css'
import { Col, Row } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'

const PokemonCard = ({ pokemon }) => (

  <Col xs={{ span: 5, offset: 1 }} md={{ span: 2, offset: 1 }} key={pokemon.id} className='elemento'>
    <Link
      className='carta'
      to={{
        pathname: '/pokemon/' + pokemon.number,
        state: { pokemon }
      }}
    >
      <span>{pokemon.name}</span><br />
      <span>{pokemon.number}</span><br />
      <img className='image' src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokemon.number + '.png'} alt='pokemon' />
    </Link>
  </Col>
)

export default withRouter(PokemonCard)
