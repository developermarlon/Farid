import {
  GET_COUNTRY,
  GET_COUNTRY_SUCCEEDED,
  GET_COUNTRY_FAILED,
  GET_STATE_BY_COUNTRY,
  GET_STATE_BY_COUNTRY_SUCCEEDED,
  GET_STATE_BY_COUNTRY_FAILED,
  GET_CITY_BY_STATE,
  GET_CITY_BY_STATE_SUCCEEDED,
  GET_CITY_BY_STATE_FAILED,
  GET_DOCUMENT_TYPE,
  GET_DOCUMENT_TYPE_SUCCEEDED,
  GET_DOCUMENT_TYPE_FAILED,
  SET_EMPTY_REDUCER,
} from '../types/masterDataType';

const INITIAL_STATE = {
  error: null,
  loading: false,
  succeeded: null,
  listDocumentType: null,
  loadingDocumentType: false,
  listCountry: null,
  loadingCountry: false,
  listStateByCountry: null,
  loadingStateByCountry: false,
  listCityByState: null,
  loadingCityByState: false,
};

const REDUCERS = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DOCUMENT_TYPE:
      return Object.assign({}, state, {
        error: null,
        succeeded: null,
        loadingDocumentType: true,
        listDocumentType: null,
      });
    case GET_DOCUMENT_TYPE_SUCCEEDED:
      if (action.payload.code === '000') {
        return Object.assign({}, state, {
          loadingDocumentType: false,
          error: action.payload,
        });
      }
      return Object.assign({}, state, {
        loadingDocumentType: false,
        listDocumentType: action.payload.data,
      });
    case GET_DOCUMENT_TYPE_FAILED:
      return Object.assign({}, state, {
        loadingDocumentType: false,
        listDocumentType: null,
        error: action.payload,
      });

    case GET_COUNTRY:
      return Object.assign({}, state, {
        error: null,
        succeeded: null,
        loadingCountry: true,
        listCountry: null,
        loadingStateByCountry: false,
        listStateByCountry: null,
        loadingCityByState: false,
        listCityByState: null,
      });
    case GET_COUNTRY_SUCCEEDED:
      if (action.payload.code === '000') {
        return Object.assign({}, state, {
          loadingCountry: false,
          error: action.payload,
        });
      }
      return Object.assign({}, state, {
        loadingCountry: false,
        listCountry: action.payload.data,
      });
    case GET_COUNTRY_FAILED:
      return Object.assign({}, state, {
        loadingCountry: false,
        listCountry: null,
        error: action.payload,
      });

    case GET_STATE_BY_COUNTRY:
      return Object.assign({}, state, {
        error: null,
        succeeded: null,
        loadingStateByCountry: true,
        listStateByCountry: null,
        loadingCityByState: false,
        listCityByState: null,
      });
    case GET_STATE_BY_COUNTRY_SUCCEEDED:
      if (action.payload.code === '000') {
        return Object.assign({}, state, {
          loadingStateByCountry: false,
          error: action.payload,
        });
      }
      return Object.assign({}, state, {
        loadingStateByCountry: false,
        listStateByCountry: action.payload.data,
      });
    case GET_STATE_BY_COUNTRY_FAILED:
      return Object.assign({}, state, {
        loadingStateByCountry: false,
        listStateByCountry: null,
        error: action.payload,
      });

    case GET_CITY_BY_STATE:
      return Object.assign({}, state, {
        error: null,
        succeeded: null,
        loadingCityByState: false,
        listCityByState: null,
      });
    case GET_CITY_BY_STATE_SUCCEEDED:
      if (action.payload.code === '000') {
        return Object.assign({}, state, {
          loadingCityByState: false,
          error: action.payload,
        });
      }
      return Object.assign({}, state, {
        loadingCityByState: false,
        listCityByState: action.payload.data,
      });
    case GET_CITY_BY_STATE_FAILED:
      return Object.assign({}, state, {
        loadingCityByState: false,
        listCityByState: null,
        error: action.payload,
      });

    case SET_EMPTY_REDUCER:
      return Object.assign({}, state, INITIAL_STATE);

    default:
      return state;
  }
};

export default REDUCERS;
