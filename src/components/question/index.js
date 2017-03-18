import React from 'react';

import './styles.css';

const getHtml = (content) => ({
  __html: content,
});

const Component = ({ number, content }) => (
  <div className="question">
    <div className="question__bg-1"/>
    <div className="question__bg-2"/>
    <div className="question__bg-3"/>
    <div className="question__number">
      {number}
    </div>
    <div className="question__text-wrapper">
      <p className="question__text" dangerouslySetInnerHTML={getHtml(content)} />
    </div>
  </div>
);

Component.propTypes = {
  number: React.PropTypes.number.isRequired,
  content: React.PropTypes.string.isRequired,
};

Component.displayName = 'question';

export default Component;
