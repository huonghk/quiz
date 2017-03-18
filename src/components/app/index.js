import React from 'react';
import Presentation from './presentation';

class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      authen: false,
    };
    this.setAuthen = this.setAuthen.bind(this);
  }
  setAuthen() {
    this.setState({ authen: true });
  }
  render() {
    const { authen } = this.state;
    const { setAuthen } = this;
    return (
      <Presentation authen={authen} setAuthen={setAuthen} />
    );
  }
}

Component.displayName = 'app';

export default Component;
