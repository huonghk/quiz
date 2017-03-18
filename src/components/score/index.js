import React from 'react';

import './styles.css';

const Component = ({ score }) => (
  <div className="score">
    Score: {score}
  </div>
);

Component.propTypes = {
  score: React.PropTypes.number.isRequired,
};

Component.displayName = 'score';

export default Component;
