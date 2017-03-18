import React from 'react';
import Item from '../answer-item';

import './styles.css';

const Component = ({ choices, qid, onSelect }) => (
  <div className="answers">
    {
      choices.map((choice, index) => (
        <div key={index} className="answers__item">
          <Item qid={qid} cid={index} value={choice} onSelect={onSelect} />
        </div>
      ))
    }
  </div>
);

Component.propTypes = {
  qid: React.PropTypes.number.isRequired,
  choices: React.PropTypes.array.isRequired,
  onSelect: React.PropTypes.func.isRequired,
};

Component.displayName = 'answers';

export default Component;
