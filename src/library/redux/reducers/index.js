import { combineReducers } from 'redux';

import userReducer from './userReducer';
import masterDataReducer from './masterDataReducer';
import formReducer from './formReducer';

const allReducers = combineReducers({
  userReducer,
  masterDataReducer,
  formReducer
});

export default allReducers;