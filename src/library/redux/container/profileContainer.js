import {connect} from 'react-redux';
import Component from 'screens/core/Profile';

import {
  getUserProfileAction,
  setUserProfileAction,
  setUserProfileCredentialAction,
  setUserEmptyAction,
} from '../actions/userAction';

import {
  getCountryAction,
  getStateByCountryAction,
  getCityByStateAction,
  getDocumentTypeAction,
  setEmptyReducer,
} from '../actions/dataMasterAction';

const mapStateToProps = state => {
  return {
    userStatus: state.userReducer,
    masterDataStatus: state.masterDataReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUserProfile: data => {
      dispatch(getUserProfileAction(data));
    },
    getCountry: data => {
      dispatch(getCountryAction(data));
    },
    getStateByCountry: data => {
      dispatch(getStateByCountryAction(data));
    },
    getCityByState: data => {
      dispatch(getCityByStateAction(data));
    },
    getDocumentType: data => {
      dispatch(getDocumentTypeAction(data));
    },
    onSetUserProfile: data => {
      dispatch(setUserProfileAction(data));
    },
    onSetUserProfileCredential: data => {
      dispatch(setUserProfileCredentialAction(data));
    },
    onSetUserEmpty: () => {
      dispatch(setEmptyReducer());
      dispatch(setUserEmptyAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
