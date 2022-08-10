import {
  GET_DATA_FIELD,
  GET_DATE_FORM,
  RETORE_FORM,
  SET_DATA_FIELD
} from "../types/formType";

const INITIAL_STATE = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: [],
  13: [],
  14: [],
  15: [],
  16: [],
  17: [],
  18: [],
  19: [],
  20: [],
  21: [],
  22: [],
  23: [],
  24: []
};

const FORM_REDUCERS = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA_FIELD:
      return state
    case GET_DATE_FORM:
      return state
    case RETORE_FORM:
      return Object.assign({}, state, {
        [action.data.idForm]: []
      })
    case SET_DATA_FIELD:
      const newState = Object.assign({}, state, {
        [action.data.idForm]: Object.assign({}, state[action.data.idForm], {
          [action.data.key]: action.data.value
        })
      })
      return newState
    default:
      return state;
  }
};

export default FORM_REDUCERS;