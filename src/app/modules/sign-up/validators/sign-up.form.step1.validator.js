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

  return errors;
}

export default SignUpFormStep1Validator;
