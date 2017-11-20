const sharedConstants = {
  api: {
    baseURL: null,
    host: null,
    port: null
  },
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

/** Get the api's baseURL that will be used accross all http requests. */
const http    = {protocol: null};
http.protocol = window.location.protocol;

const api   = {host: null, port: null};
api.host    = '127.0.0.1'; // TODO: Set as environment variables.
api.port    = '8080'; // TODO: Set as environment variables.
api.baseURL = `${http.protocol}//${api.host}:${api.port}`;

sharedConstants.api = api;

/** ISODate format used by "moment.js". */
sharedConstants.format.forIsoDate = 'MM-DD-YYYY';

/** An human readable string date format used on forms. */
sharedConstants.format.forUserFriendly.date = 'MM/DD/YYYY';

/** Regex for validating emails. */
sharedConstants.pattern.forEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line

/** Regex for validating height in meters. E.g: 1.85 */
sharedConstants.pattern.forHeight = /^\d(\.)\d\d$/

export default sharedConstants;
