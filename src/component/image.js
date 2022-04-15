import React from 'react';
import '../style/image.css';

class Image extends React.Component {
    constructor(props) {
        super(props)

        this.getAPIData = this.getAPIData.bind(this);
    }

    async getAPIData() {
        let url = "https://pokeapi.co/api/v2/pokemon/" + this.props.index;
        const response = await fetch(url);
        const responseJSON = await response.json();

        const responsePokemon1 = responseJSON.sprites.front_default;
        document.getElementById("myImg1").src = responsePokemon1;
    }

    componentDidMount() {
        this.getAPIData();
    }

    componentDidUpdate() {
        this.getAPIData();
    }

    render () {
        return (
            <div>
                <img id="myImg1" alt = "Pokémon1"></img>
            </div>
        );
    }
}


export default Image;