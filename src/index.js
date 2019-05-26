import React from 'react';
import ReactDOM from 'react-dom';

import './myStyles.scss';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    /*onGetKirkBio = async () => {
        try {
            const result = await fetch('http://stapi.co/api/v1/rest/character/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: {
                    title: 'James T. Kirk',
                    name: 'James T. Kirk',
                },
            });
            const resultJSON = await result.json();
            const character = resultJSON.characters[0];
            this.setState({ CaptainKirkBio: character });
        } catch (error) {
            console.log('error', error);
        }
    };*/
    async componentDidMount() {
        const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
        const json = await response.json();
        this.setState({ data: json });
    }



    /*onGetKirkBio(){
        console.log('comp did mount');
        const result = fetch('http://stapi.co/api/v1/rest/character/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: {
                title: 'James T. Kirk',
                name: 'James T. Kirk',
            },
        });
    }*/
    
    render(){
        return (
            <div className="app">
                <img src="/dist/img/header.jpeg" alt=""/>
                <p>
                    We are a most promising species, Mr. Spock, as predators go. Did you know that? I frequently
                    have my doubts. I dont. Not any more. And maybe in a thousand years or so, we will be able
                    to prove it.
                </p>
                <p>- Captain Kirk</p>
                <div>
                    <ul>
                        {this.state.data.map(el => (
                            <li>
                                {el.name}: {el.price_usd}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

ReactDOM.render(<App />, document.getElementById('app'));
