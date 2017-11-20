/**
 * NPM packages.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

/**
 * Project packages.
 */
import sharedConstants            from './../../shared/constants/shared.constants';
import sharedValidations          from './../../shared/validations/shared.validations';
import SignUpFormButton           from './sign-up.form.button.component';
import SignUpFormInputField       from './sign-up.form.input-field.component';
import SignUpFormStep1Validator   from './../validators/sign-up.form.step1.validator';

class SignUpFormStep1 extends Component {
  render() {
    /** Extract custom props. */
    const {goToNextStep} = this.props;

    /** Extract redux form props. */
    const {invalid} = this.props;

    /** Set implementation specs. */
    const form      = {isInvalid: null};
    form.isInvalid  = invalid;

    const { format } = sharedConstants;

    const {
      datePattern,
      dateValue,
      required
    } = sharedValidations;

    const template = (
      <form>
        <Field
          component={SignUpFormInputField}
          label='Full name'
          name='name.real'
          onChange={(event, newRealName) => this.setDisplayableName(newRealName)}
          placeholder='Leonardo Sarmento de Castro'
          validate={[required]}/>

        <Field
          component={SignUpFormInputField}
          isDisabled={true}
          label='Displayable name'
          name='name.displayable'
          placeholder='Leonardo'/>

        <Field
          component={SignUpFormInputField}
          label='Date of birth'
          name='dateOfBirth'
          placeholder={format.forUserFriendly.date.toLowerCase()}
          validate={[required, datePattern, dateValue]}/>

        <div className="field has-text-centered">
          <SignUpFormButton
            isDisabled={form.isInvalid}
            onClick={goToNextStep}
            text='Next'/>
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
  form: 'sign-up.form', // NOTE: Needs to be the same for all steps.
  destroyOnUnmount: false, // NOTE: Preserve form data.
  forceUnregisterOnUnmount: true,
  validate: SignUpFormStep1Validator
};
const createReduxForm = reduxForm(options);
SignUpFormStep1       = createReduxForm(SignUpFormStep1);

export default SignUpFormStep1;
