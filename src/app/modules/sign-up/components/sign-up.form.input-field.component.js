/**
 * NPM packages.
 */
import React, { Component } from 'react';

/** Class component. */
class SignUpFormInputField extends Component {
  render() {
    /** Redux form injected input properties. */
    const { input } = this.props;

    /** Redux form validation attributes. */
    const { meta }            = this.props;
    const { error, touched }  = meta;
    const shouldDisplayError  = Boolean(touched && error);

    /** Custom properties. */
    const {
      isDisabled,
      label,
      placeholder
    } = this.props;

    /** Describes the component template. */
    const template = (
      <div className='field'>
        <label className="label">{label}</label>
        <div className="control">
          <input
            className="input"
            disabled={isDisabled}
            type="text"
            placeholder={placeholder}
            {...input} />

          {shouldDisplayError &&
          <InputError error={error} />}
        </div>
      </div>
    );

    return template;
  }
}

/** Functional component. */
const InputError = ({error}) => (
  <div>
    <p className="help is-danger">{error}</p>
  </div>
);

export default SignUpFormInputField;
