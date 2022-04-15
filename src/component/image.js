import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props)

        this.getAPIData = this.getAPIData.bind(this);
    }

    async getAPIData() {
        let url = "https://pokeapi.co/api/v2/pokemon/" + this.props.index;
        const response = await fetch(url);
        const responseJSON = await response.json();

        const responsePokemon = responseJSON.sprites.front_default;
        document.getElementById("myImg").src = responsePokemon;
    }

    componentDidMount() {
        this.getAPIData();
    }

    componentDidUpdate() {
        this.getAPIData();
    }

    render () {
        return (
            <img id="myImg" alt = "Pokémon"></img>
        );
    }
}


export default Image;