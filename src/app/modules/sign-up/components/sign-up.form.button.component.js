/**
 * NPM packages.
 */
import React from 'react';

const SignUpFormButton = ({isDisabled = false, onClick, text}) => (
  <div className="field has-text-centered">
    <button className="button -sign-up is-info is-outlined"
    onClick={onClick}
    disabled={isDisabled}>{text}</button>
  </div>
);

export default SignUpFormButton;
