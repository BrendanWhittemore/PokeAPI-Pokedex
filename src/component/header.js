import React from 'react';
import '../style/header.css';

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
            <div id = "headerborder">
              <div id = "header">
                <h1>{this.state.pokeName} (#{this.props.index})</h1>
              </div>
            </div>
        );
    }
}


export default Header;