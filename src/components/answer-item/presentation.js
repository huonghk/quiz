import React from 'react';

import './styles.css';

const Component = ({ value, clicked, onSelect }) => (
  <div
    className={`answer-item ${clicked ? 'answer-item--clicked' : ''}`}
    onClick={onSelect}
  >
    {value}
  </div>
);

Component.propTypes = {
  value: React.PropTypes.string.isRequired,
  clicked: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired,
};

Component.displayName = 'answer item presentation';

export default Component;
