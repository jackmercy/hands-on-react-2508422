import React, { Component } from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Welcome from darknest! {this.props.name}</div>;
  }
}

export default Welcome;
