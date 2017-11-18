const sharedConstants = {
  format: {
    forIsoDate: '',
    forUserFriendly: {
      date: null
    }
  },
  pattern: {
    forEmail: null,
    forHeight: null
  }
};

/** ISODate format used by "moment.js". */
sharedConstants.format.forIsoDate = 'MM-DD-YYYY';

/** An human readable string date format used on forms. */
sharedConstants.format.forUserFriendly.date = 'MM/DD/YYYY';

/** Regex for validating emails. */
sharedConstants.pattern.forEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line

/** Regex for validating height in meters. E.g: 1.85 */
sharedConstants.pattern.forHeight = /^\d(\.)\d\d$/

export default sharedConstants;
