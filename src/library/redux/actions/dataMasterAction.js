import {
  GET_COUNTRY,
  GET_STATE_BY_COUNTRY,
  GET_CITY_BY_STATE,
  GET_DOCUMENT_TYPE,
  SET_EMPTY_REDUCER,
} from '../types/masterDataType';

export const getCountryAction = data => {
  return {
    type: GET_COUNTRY,
    data,
  };
};
export const getStateByCountryAction = data => {
  return {
    type: GET_STATE_BY_COUNTRY,
    data,
  };
};
export const getCityByStateAction = data => {
  return {
    type: GET_CITY_BY_STATE,
    data,
  };
};
export const getDocumentTypeAction = data => {
  return {
    type: GET_DOCUMENT_TYPE,
    data,
  };
};

export const setEmptyReducer = () => ({type: SET_EMPTY_REDUCER});
