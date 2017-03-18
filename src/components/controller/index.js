import React from 'react';
import PlayBoard from '../play-board';
import Finish from '../finish';

class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      finish: false,
      result: [],
    };
    this.onFinish = this.onFinish.bind(this);
  }
  onFinish(result) {
    this.setState({
      finish: true,
      result,
    });
  }
  render() {
    const { finish, result } = this.state;
    const { onFinish } = this;
    return (
      finish ? <Finish result={result} /> : <PlayBoard onFinish={onFinish} />
    );
  }
}

Component.displayName = 'play board';

export default Component;
