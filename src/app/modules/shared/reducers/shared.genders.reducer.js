/**
 * Project packages.
 */
import { FETCH_GENDERS } from './../actions/shared.action.types';

const sharedGendersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GENDERS:
      const { genders } = action;
      return genders;
    default:
      return state;
  }
}

export default sharedGendersReducer;
