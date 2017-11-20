/**
 * NPM packages.
 */
import React from 'react';

const SignUpFormButton = ({isDisabled = false, onClick, text}) => (
  <button className="button -sign-up is-info is-outlined"
  onClick={onClick}
  disabled={isDisabled}>{text}</button>
);

export default SignUpFormButton;
