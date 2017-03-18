import React from 'react';
import Question from '../question';
import Answers from '../answers';
import Submitting from '../submitting';

import './styles.css';

const Component = ({ current, question, onSelect, submitting }) => (
  <div className="play-board">
    <div className="play-board__question">
      <Question number={current + 1} content={question.content} />
    </div>
    <div className="play-board__answer">
      <Answers choices={question.choices} qid={question.id} onSelect={onSelect} />
    </div>
    <div className={`play-board__submitting ${submitting ? 'play-board__submitting--open' : ''}`}>
      <Submitting />
    </div>
  </div>
);

Component.propTypes = {
  current: React.PropTypes.number.isRequired,
  question: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    content: React.PropTypes.string.isRequired,
    choices: React.PropTypes.array.isRequired,
  }).isRequired,
  onSelect: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired,
};

Component.displayName = 'play board presentation';

export default Component;
