import React from 'react'
import pokemons from './pokemon'
import { Col, Row, Container } from 'react-bootstrap'
import PokemonCard from './PokemonCard'

const Pokedex = () => (
  <Container fluid>
    <h2 className='Titulo'>Pokedex</h2>
    <Col xs={{ span: 11, offset: 0 }} md={{ span: 11, offset: 0 }}>
      <Row>
        {pokemons.data.pokemons.map(item =>
          <PokemonCard key={item.id} pokemon={item} />
        )}
      </Row>
    </Col>
  </Container>
)

export default Pokedex
