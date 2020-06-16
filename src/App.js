import React, { Component } from 'react'
import './Style.css'
import pokemons from './pokemon'
import { Container, Row, Col } from 'react-bootstrap'

class App extends Component {
  render () {
    return (
      <Container fluid>
        <h2 className='Titulo'>Pokedex</h2>
        <Row>
          {pokemons.data.pokemons.map(item =>
            <Col xs={{ span: 4, offset: 1 }} md={{ span: 3, offset: 2 }} key={item.id} className='elemento'>
              <span>{item.name}</span>
            </Col>
          )}
        </Row>
      </Container>
    )
  }
}

export default App
