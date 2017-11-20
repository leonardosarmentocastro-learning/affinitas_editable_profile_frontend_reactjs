/**
 * NPM packages.
 */
import axios from 'axios';

/**
 * Project packages.
 */
import {
  FETCH_GENDERS,
  FETCH_MARITAL_STATUSES
}                         from './shared.action.types';
import sharedConstants    from './../../shared/constants/shared.constants';

/** @name fetchGenders */
function fetchGenders() {
  const { api } = sharedConstants;
  const path    = '/users/constants/genders';
  const url     = `${api.baseURL}${path}`;

  return axios.get(url)
    .then(response => {
      const genders = response.data;
      const action  = {
        type: FETCH_GENDERS,
        genders
      };

      return action;
    });
}

/** @name fetchMaritalStatuses */
function fetchMaritalStatuses() {
  const { api } = sharedConstants;
  const path    = '/users/constants/marital_statuses';
  const url     = `${api.baseURL}${path}`;

  return axios.get(url)
    .then(response => {
      const maritalStatuses = response.data;
      const action  = {
        type: FETCH_MARITAL_STATUSES,
        maritalStatuses
      };

      return action;
    });
}

export { fetchGenders, fetchMaritalStatuses };
