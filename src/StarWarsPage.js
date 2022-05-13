import React from 'react';
import StarWarsList from './StarWarsList';
import { getStarWars } from './services/fetch-utils';

export default class StarWarsPage extends React.Component {

  constructor() {
    super();
    this.state = {
      starWarsChars: [],
      page: 1,
      perPage: 19
    };
  }

  

  async componentDidMount() {
    const from = this.state.page * this.state.perPage - this.state.perPage;
    const to = this.state.page * this.state.perPage;
    const chars = await getStarWars(from, to);
    this.setState({ starWarsChars: chars });
  }

  render() {
    return (
      <div>
        <p>Star Wars Characters</p>
        <button disabled={this.state.page <= 1}
          onClick={() => this.setState({ page: this.state.page - 1 })}>Prev</button>
        <button onClick={() => this.setState({ page: this.state.page + 1 })}>Next</button>

        <StarWarsList starWarsChars={this.state.starWarsChars}/>
      </div>
    );
  }
}
