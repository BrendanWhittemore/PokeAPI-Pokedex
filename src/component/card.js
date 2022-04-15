import React from 'react';
import Header from './header';
import Image from './image';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {index: 1};

        this.updatePokemon = this.updatePokemon.bind(this);
    }

    updatePokemon() {
        if (this.state.index === 151) {
            this.setState({index: 1});
        } else {
            this.setState({index: this.state.index + 1});
        }
        console.log(this.state)
    }

    render () {

        return (
          <div id= "card">
              <h1>Pokémon No. {this.state.index}</h1>
            <Header index = {this.state.index}/>
            <Image index = {this.state.index}/>
            <div id = "button">
              <button onClick = {this.updatePokemon}>Next Pokémon</button>
            </div>
          </div>
        );
    }
}


export default Card;