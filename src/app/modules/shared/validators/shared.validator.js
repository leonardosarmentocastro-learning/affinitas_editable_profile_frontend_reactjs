/**
 * NPM packages.
 */
import moment from 'moment';

/**
 * Project packages.
 */
import sharedConstants from './../constants/shared.constants';

/**
 * TODO: For the first instance, I will leave it as a class.
 * As I try to test the entire SignUp flow, I will validate if it is better to
 * use the "SharedValidator" as a class or a simple object.
 */
class SharedValidator {
  /**
   * Validate if a given string date can be used as a valid javascript Date object.
   * @param {string} stringDate
   */
  validateDatePattern(stringDate) {
    const format              = sharedConstants.format.forIsoDate;
    const momentDate          = moment(stringDate, format);
    const isAnValidDateValue  = momentDate.isValid();

    return isAnValidDateValue;
  }

  /**
   * Validate if a given string date value matches the desired regex pattern.
   * @param {string} stringDate
   */
  validateDateValue(stringDate) {
    const pattern               = /\d{2}[/]\d{2}[/]\d{4}/; // 99/99/9999
    const isAnValidDatePattern  = (pattern.test(stringDate));

    return isAnValidDatePattern;
  }
}

export default SharedValidator;
