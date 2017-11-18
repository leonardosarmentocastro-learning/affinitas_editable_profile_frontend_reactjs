/**
 * Project packages.
 */
import sharedConstants from './../../shared/constants/shared.constants';
import SharedValidator from './../../shared/validators/shared.validator';

const SignUpFormStep1Validator = values => {
  const errors                = {name: {real: null}};
  const { name, dateOfBirth } = values;

  /** @name name.real */
  {
    const constraint      = { maxlength: null };
    constraint.maxlength  = 256;

    /** Set validation specs. */
    const isEmpty               = !(name && name.real);
    const hasExceededMaxLength  =
      (!isEmpty)
      && Boolean(name.real.length > constraint.maxlength);

    if (isEmpty) {
      errors.name.real = 'This input is required.'; // TODO: Set the error messages in a single file?
    } else if (hasExceededMaxLength) {
      errors.name.real = 'Your name is too long.'; // TODO: Set the error messages in a single file?
    }
  }

  /** @name dateOfBirth */
  {
    /** Set validation specs. */
    const sharedValidator       = new SharedValidator();
    const stringDate            = dateOfBirth;

    const isEmpty               = !Boolean(dateOfBirth);
    const isAnValidDateValue    = sharedValidator.validateDateValue(stringDate);
    const isAnValidDatePattern  = sharedValidator.validateDatePattern(stringDate);
    if (isEmpty) {
      errors.dateOfBirth = 'This input is required.';
    } else if (!isAnValidDateValue) {
      errors.dateOfBirth = 'The provided date value is invalid.';
    } else if (!isAnValidDatePattern) {
      let format  = sharedConstants.format.forUserFriendly.date;
      format      = format.toLowerCase();

      errors.dateOfBirth = `Does not match the ${format} format.`;
    }
  }

  return errors;
}

export default SignUpFormStep1Validator;
