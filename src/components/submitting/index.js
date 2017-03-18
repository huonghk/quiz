import React from 'react';
import IconLoading from '../../images/loading.gif';

import './styles.css';

const Component = () => (
  <div className="submitting">
    <div className="submitting__overlay" />
    <div className="submitting__body">
      <div className="submitting__message">
        Please wait a second. We are processing result...
      </div>
      <div className="submitting__icon">
        <img alt="loading" src={IconLoading} />
      </div>
    </div>
  </div>
);

Component.displayName = 'submitting';

export default Component;
