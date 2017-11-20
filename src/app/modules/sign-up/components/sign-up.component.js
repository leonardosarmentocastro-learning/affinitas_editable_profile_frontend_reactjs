/**
 * NPM packages,
 */
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router-dom';

/**
 * Project packages.
 */
import {
  fetchGenders,
  fetchMaritalStatuses
} from './../../shared/actions/shared.action.functions';
import SignUpFormStep1  from './sign-up.form.step1.component';
import SignUpFormStep2  from './sign-up.form.step2.component';

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

  componentDidMount() {
    this.props.fetchGenders();
    this.props.fetchMaritalStatuses();
  }

  render() {
    /** Describe specs for the implementation. */
    const { step: currentStep } = this.state;
    const isOnStep1             = Boolean(currentStep === 1);
    const isOnStep2             = Boolean(currentStep === 2);
    // const isOnStep3             = Boolean(currentStep === 3);

    /** Describe the component template. */
    const template = (
      <div>
        <CurrentWizardStep step={currentStep} />

        {isOnStep1 &&
        <SignUpFormStep1
          goToNextStep={this.goToNextStep} />
        }
        {isOnStep2 &&
          <SignUpFormStep2
            genders={this.props.genders}
            goToNextStep={this.goToNextStep}
            goToPreviousStep={this.goToPreviousStep}
            maritalStatuses={this.props.maritalStatuses}/>
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

/** TODO */
const mapStateToProps = (state) => {
  const { genders, maritalStatuses }  = state;
  const props                         = { genders, maritalStatuses };

  return props;
};
const actionCreators  = { fetchGenders, fetchMaritalStatuses };
const Container       = connect(mapStateToProps, actionCreators)(SignUp);
export default Container;
