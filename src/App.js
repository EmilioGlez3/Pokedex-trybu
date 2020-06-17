import React, { Component } from 'react'
import './Style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Pokedex from './Pokedex'
import PokeDetails from './PokemonDetail'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Pokedex} />
          <Route exact path='/pokemon/:id' component={PokeDetails} />
        </Switch>
      </Router>
    )
  }
}

export default App
