import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'Some test on states' };
  }

  render() {
    return <h2>{this.state.someKey}</h2>;
  }

  componentDidMount() {
    this.setState({ someKey: 'Some test on states!!' });
  }
}

export default Home;
