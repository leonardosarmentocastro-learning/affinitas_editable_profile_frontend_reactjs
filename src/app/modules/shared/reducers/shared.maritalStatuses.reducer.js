/**
 * Project packages.
 */
import { FETCH_MARITAL_STATUSES } from './../actions/shared.action.types';

const sharedMaritalStausesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MARITAL_STATUSES:
      const { maritalStatuses } = action;
      return maritalStatuses;
    default:
      return state;
  }
}

export default sharedMaritalStausesReducer;
