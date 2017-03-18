import React from 'react';
import SignIn from '../sign-in';
import PlayBoard from '../controller';

import './styles.css';

const Component = ({ authen, setAuthen }) => (
  <div className="app">
    <header className="app__header">
    </header>
    <main className="app__body">
      {
        authen ? <PlayBoard /> : <SignIn onSuccess={setAuthen} />
      }
    </main>
  </div>
);

Component.propTypes = {
  authen: React.PropTypes.bool.isRequired,
  setAuthen: React.PropTypes.func.isRequired,
};

Component.displayName = 'app presentation';

export default Component;
