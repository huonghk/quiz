import React from 'react';
import Row from '../social-row';

import './styles.css';

const Component = ({ social }) => (
  <div className="social">
    {
      social.map(item => (
        <div key={item.id} className="social__item">
          <div className="social__header">
            {item.id}
          </div>
          <div className="social__body">
            {
              item.children.map((c, index) => (
                <Row key={index} label={c.name} value={c.percentage} />
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
);

Component.propTypes = {
  social: React.PropTypes.array.isRequired,
};

Component.displayName = 'social';

export default Component;
