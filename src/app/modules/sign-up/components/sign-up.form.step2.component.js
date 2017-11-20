/**
 * NPM packages.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

/**
 * Project packages.
 */
import SignUpFormButton       from './sign-up.form.button.component';
import SignUpFormSelectField  from './sign-up.form.select-field.component'

class SignUpFormStep2 extends Component {
  render() {
    /** Extract custom props. */
    const {
      genders,
      goToNextStep,
      goToPreviousStep,
      maritalStatuses
    } = this.props;

    /** Extract Redux form props.*/
    const { invalid } = this.props;

    /** Set implementation specs. */
    const form      = {isInvalid: null};
    form.isInvalid  = invalid;

    const template = (
      <form>
        <Field
          component={SignUpFormSelectField}
          label='Gender'
          listOfItems={genders}
          name='gender'
        />

        <div className="field has-text-centered">
          <SignUpFormButton
            onClick={goToPreviousStep}
            text='Back'/>
          <SignUpFormButton
            isDisabled={form.isInvalid}
            onClick={goToNextStep}
            text='Next'/>
        </div>
      </form>
    );

    return template;
  }
}

/** Creating the Redux form. */
const options         = {
  form: 'sign-up.form', // NOTE: Needs to be the same for all steps.
  destroyOnUnmount: false, // NOTE: Preserve form data.
  forceUnregisterOnUnmount: true
};
const createReduxForm = reduxForm(options);
SignUpFormStep2       = createReduxForm(SignUpFormStep2);

export default SignUpFormStep2;
