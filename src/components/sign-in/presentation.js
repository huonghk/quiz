import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Logo from '../../images/ca.png';
import './styles.css';

const Component = ({ onSubmit }) => (
  <div className="sign-in">
    <div className="app-logo__icon">
      <img alt="Personality Insights" src={Logo} />
    </div>
    <div className="sign-in__description">
      Personality Insights takes your Facebook posts combined with a questionnaire result to analyze a spectrum of personality attributes to help discover actionable insights about you and your friends.
    </div>
    <div className="sign-in__form">
      <FacebookLogin
        appId="157205431407018"
        scope='public_profile,email,user_posts'
        autoLoad
        callback={onSubmit}
      />
    </div>
  </div>
);

Component.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

Component.displayName = 'sign in presentation';

export default Component;
