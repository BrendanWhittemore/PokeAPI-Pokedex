import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.getAPIData = this.getAPIData.bind(this);
        this.state = {pokeName: []};
    }

    async getAPIData() {
        let url = "https://pokeapi.co/api/v2/pokemon/" + this.props.index;
        const response = await fetch(url);
        const responseJSON = await response.json();

        const responseName = responseJSON.name;
        const responseNameTitleCase = responseName.charAt(0).toUpperCase() + responseName.substr(1);

        this.setState( 
            {
                pokeName: responseNameTitleCase
            }
        );
    }

    componentDidMount() {
        this.getAPIData();
    }
    
    componentDidUpdate() {
        this.getAPIData();
    }

    render () {
        return (
            <p>{this.state.pokeName}</p>
        );
    }
}


export default Header;