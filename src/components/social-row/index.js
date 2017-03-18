import React from 'react';

import './styles.css';

const Component = ({ label, value }) => (
  <div className="social-row">
    <div className="social-row__label">
      {label}:&nbsp;
    </div>
    <div className="social-row__value">
      {Math.round(value * 100, 2)}%
    </div>
  </div>
);

Component.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
};

Component.displayName = 'social row';

export default Component;
