import React from 'react';
import Social from '../social';
import Score from '../score';

import './styles.css';

const Component = ({ result }) => (
  <div className="finish">
    <div className="finish__bg-1" />
    <div className="finish__bg-2" />
    <div className="finish__bg-3" />
    <div className="finish__social">
      <Social social={result.social} />
    </div>
    <div className="finish__score">
      <Score score={result.score} />
    </div>
  </div>
);

Component.propTypes = {
  result: React.PropTypes.shape({
    social: React.PropTypes.array.isRequired,
    score: React.PropTypes.number.isRequired,
  }).isRequired,
};

Component.displayName = 'finish';

export default Component;
