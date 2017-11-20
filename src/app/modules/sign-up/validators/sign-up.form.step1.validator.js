/**
 * Project packages.
 */
import sharedValidations from './../../shared/validations/shared.validations';

/** Extract shared validation methods. */
const { maxLength256 } = sharedValidations;

/** Builds the validator. */
const SignUpFormStep1Validator = values => {
  const errors    = {name: {real: null}};
  const { name }  = values;

  /** @name name.real */
  const isEmpty               = !(name && name.real);
  const hasExceededMaxLength  = (!isEmpty) && maxLength256(name.real);

  if (hasExceededMaxLength) {
    errors.name.real = 'Your name is too long.';
  }

  return errors;
}

export default SignUpFormStep1Validator;
