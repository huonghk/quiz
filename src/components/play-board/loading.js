import React from 'react';
import Icon from '../../images/loading.gif';

import './styles.css';

const Component = () => (
  <div className="play-board__loading">
    Analyzing your posts. We will take you to the questionnaire shortly
    <img alt="loading" src={Icon} />
  </div>
);

Component.displayName = 'play board loading';

export default Component;
