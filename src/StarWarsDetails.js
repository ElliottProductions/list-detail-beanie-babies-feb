import { Link } from 'react-router-dom';
import { getChar } from './services/fetch-utils';
import React from 'react';

export default class StarWarsDetails extends React.Component {

  constructor() {
    super();
    this.state = {
      char: []
    };
  }

  async componentDidMount() {
    async function load() {
      const charDetails = await getChar(this.params.id);
      this.setState({ char: charDetails });
    }
    load();
  }

  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <div className="char-details">
          <h2>{this.state.char.name}</h2>
          <p>from</p>
          <h5>{this.state.char.homeworld}</h5><h5>{this.state.char.homeworld__001}</h5>
          <img src={this.state.char.image}/>
          <p>Gender: {this.state.char.gender}</p>
          <p>Height: {this.state.char.height}</p>
          <p>Mass: {this.state.char.mass}</p>
          <p>{this.state.char.productLine && `Product Line: ${this.state.char.productLine}`}</p>
          <p>{this.state.char.manufacturer && `Manufacturer: ${this.state.char.manufacturer}`}</p>
          <p>{this.state.char.model && `Model: ${this.state.char.model}`}</p>
          <p>{this.state.char.class && `Class: ${this.state.char.class}`}</p>
        
        </div>
      </>
    );
  }
}
