import React from 'react';
import Header from './header';
import Image from './image';
import '../style/card.css';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {index: 1};

        this.previousPokemon = this.previousPokemon.bind(this);
        this.nextPokemon = this.nextPokemon.bind(this);
    }

    previousPokemon() {
        if (this.state.index === 1) {
            this.setState({index: 151});
        } else {
            this.setState({index: this.state.index - 1});
        }
    }

    nextPokemon() {
        if (this.state.index === 151) {
            this.setState({index: 1});
        } else {
            this.setState({index: this.state.index + 1});
        }
    }

    render () {

        return (
          <div id= "card">
            <Header index = {this.state.index}/>
            <Image index = {this.state.index}/>
            <div id = "buttons">
              <div id = "prev"><button onClick = {this.previousPokemon}>Previous</button></div>
              <div id = "next"><button onClick = {this.nextPokemon}>Next</button></div>
            </div>
          </div>
        );
    }
}


export default Card;