/**
 * NPM packages.
 */
import { combineReducers }        from 'redux';
import { reducer as formReducer } from 'redux-form';

/**
 * Project packages.
 */
import sharedGendersReducer         from './../../shared/reducers/shared.genders.reducer';
import sharedMaritalStausesReducer  from './../../shared/reducers/shared.maritalStatuses.reducer';

const reducers    = {
  form: formReducer,
  genders: sharedGendersReducer,
  maritalStatuses: sharedMaritalStausesReducer
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
