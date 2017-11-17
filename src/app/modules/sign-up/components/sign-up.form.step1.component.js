/**
 * NPM packages.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

/**
 * Project packages.
 */
import SignUpFormInputField       from './sign-up.form.input-field.component';
import SignUpFormStep1Validator   from './../validators/sign-up.form.step1.validator';

class SignUpFormStep1 extends Component {
  render() {
    const template = (
      <form>
        <Field
          component={SignUpFormInputField}
          label='Full name'
          name='name.real'
          onChange={(event, newRealName) => this.setDisplayableName(newRealName)}
          placeholder='Leonardo Sarmento de Castro'/>

        <Field
          component={SignUpFormInputField}
          isDisabled={true}
          label='Displayable name'
          name='name.displayable'
          placeholder='Leonardo'/>

        {/* required */}
        {/* format: Does not match the "TODO" format. */}
        {/* invalid-value: The provided date value is invalid */}
        {/* ----- */}
        {/* TODO: placeholder="{{ctrl.form.constants.format.forUserFriendly.date | lowercase}}" */}
        {/* TODO: classNames: "-form-spacement bottom"
          <div className="field -form-spacement bottom">
            <label className="label"></label>
            ...
        */}
        {/* <Field
          component={this.renderInput}
          isDisabled={true}
          label='Date of birth'
          name='dateOfBirth'
          placeholder='TODO'/> */}

        {/* TODO: Component shared between all sign-up form components. */}
        <div className="field has-text-centered">
          <button className="button -sign-up is-info is-outlined"
          ng-click='ctrl.page.goTo.step2()'
          ng-disabled='ctrl.step1form.$invalid'>Next</button>
        </div>
      </form>
    );

    return template;
  }

  setDisplayableName(newRealName) {
    /** Set implementation specs. */
    const { change }  = this.props;
    const field       = 'name.displayable';

    const hasRealName = Boolean(newRealName);
    if (!hasRealName) {
      const value = '';
      change(field, value);

      return;
    }

    /** Get the first name from the new provided "real name".*/
    const names = newRealName.split(' '); // ['Leonardo', 'Sarmento', ...]
    const first = {name: null};
    first.name  = names[0];

    const value = first.name;
    change(field, value);
  }
}

/** Creating the Redux form. */
const options         = {
  form: 'sign-up.form',
  validate: SignUpFormStep1Validator
};
const createReduxForm = reduxForm(options);
SignUpFormStep1       = createReduxForm(SignUpFormStep1);

export default SignUpFormStep1;
