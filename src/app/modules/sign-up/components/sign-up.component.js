/**
 * NPM packages,
 */
import React, { Component } from 'react';

/**
 * Styles.
 */
import './../styles/sign-up.style.css';

class SignUpComponent extends Component {
  render() {
    const template = (
      <div>
        <div className="field">
          <p className='has-text-centered has-text-grey'>Sign up - TODO of 3</p>
        </div>

        <div className="field has-text-centered">
          {/* TODO: Use "react-router-dom" Link on "<a>". */}
          <a className="button is-white is-small" href='/#/sign_in'>
            <span>Already have an account? <span className='-is-affinitas is-success'>Sign in</span></span>
          </a>
        </div>
      </div>
    );

    return template;
  }
}

export default SignUpComponent;
