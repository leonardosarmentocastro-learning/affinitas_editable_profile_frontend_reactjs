/**
 * NPM packages,
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Project packages.
 */
import SignUpFormStep1 from './sign-up.form.step1.component';

/**
 * Styles.
 */
import './../styles/sign-up.style.css';

/**
 * Wizard sign up component.
 */
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.goToNextStep     = this.goToNextStep.bind(this);
    this.goToPreviousStep = this.goToPreviousStep.bind(this);

    this.state = {
      step: 1
    };
  }

  render() {
    /** Describe specs for the implementation. */
    const { step: currentStep } = this.state;
    const isOnStep1             = Boolean(currentStep === 1);
    // const isOnStep2             = Boolean(currentStep === 2);
    // const isOnStep3             = Boolean(currentStep === 3);

    /** Describe the component template. */
    const template = (
      <div>
        <CurrentWizardStep step={currentStep}/>

        {isOnStep1 &&
        <SignUpFormStep1
          goToNextStep={this.goToNextStep}/>
        }

        <LinkToAlreadyHaveAnAccount />
      </div>
    );

    return template;
  }

  goToNextStep() {
    const { step: currentStep } = this.state;
    this.setState({step: (currentStep + 1)});
  }

  goToPreviousStep() {
    const { step: currentStep } = this.state;
    this.setState({step: (currentStep - 1)});
  }
}

/**
 * Functional components.
 */
const LinkToAlreadyHaveAnAccount = () => (
  <div className="field has-text-centered">
    <Link className="button is-white is-small" to="/sign_in">
      <span>Already have an account? <span className='-is-affinitas is-success'>Sign in</span></span>
    </Link>
  </div>
);

const CurrentWizardStep = ({step}) => (
  <div className="field">
    <p className='has-text-centered has-text-grey'>Sign up - {step} of 3</p>
  </div>
);

export default SignUp;
