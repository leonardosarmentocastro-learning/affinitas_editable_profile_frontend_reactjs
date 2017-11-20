/**
 * NPM packages.
 */
import moment from 'moment';

/**
 * Project packages.
 */
import sharedConstants from './../constants/shared.constants';

/** Set error validation specs. */
const error     = { message: null };
const NO_ERROR  = undefined;

/**
 * Build validation methods.
 */
/**
 * @name maxLength
 * @param {number} max
 * Validate if a given value has exceeded the specified max length.
 */
const maxLength = max => {
  const validation  = {method: null};
  validation.method = value => {
    error.message = `Must be ${max} characters or less.`;

    const hasExceededMaxLength = (value.length > max);
    return (hasExceededMaxLength ? error.message : NO_ERROR);
  };

  return validation.method;
};

/**
 * @name required
 * @param {any} value
 * Validate if a given value was provided or not.
 */
const required = value => {
  error.message = 'This input is required';

  const hasProvidedAnValue = Boolean(value);
  return (hasProvidedAnValue ? NO_ERROR : error.message);
};

/**
 * @name dateValue
 * @param {string} stringDate
 * Validate if a given string date can be used as a valid javascript Date object.
 */
const dateValue = stringDate => {
  error.message = 'The provided date value is invalid.';

  const format              = sharedConstants.format.forIsoDate;
  const momentDate          = moment(stringDate, format);
  const isAnValidDateValue  = momentDate.isValid();

  return (isAnValidDateValue ? NO_ERROR : error.message);
}

/**
 * @name datePattern
 * @param {string} stringDate
 * Validate if a given string date value matches the desired format(regex pattern).
 */
const datePattern = stringDate => {
  error.message = format => `Does not match the ${format.toLowerCase()} format.`;

  const pattern               = /\d{2}[/]\d{2}[/]\d{4}/; // 99/99/9999
  const isAnValidDatePattern  = (pattern.test(stringDate));

  const format = sharedConstants.format.forUserFriendly.date;
  return (isAnValidDatePattern ? NO_ERROR : error.message(format));
}

/** Exposed validation methods. */
const sharedValidations = {
  datePattern,
  dateValue,
  maxLength256: maxLength(256),
  required
};

export default sharedValidations;
