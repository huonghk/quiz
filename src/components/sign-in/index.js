import React from 'react';
import resources from '../../resources';
import Presentation from './presentation';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(response) {
    window.fb = response;
    if (response.accessToken) {
      resources.creditProfiles(response.id, response.accessToken);
      this.props.onSuccess();
    }
  }
  render() {
    const { onSubmit } = this;
    return (
      <Presentation onSubmit={onSubmit} />
    );
  }
}

Component.displayName = 'app';

export default Component;
