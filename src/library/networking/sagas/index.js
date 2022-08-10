import { all } from "redux-saga/effects";
// import {
//     watchGetUser,
//     watchSetUser,
//     watchGetUserProfile,
//     watchSetUserProfile,
//     watchSetUserProfileCredential
// } from './userSaga';

// import {
//     watchGetCountry,
//     watchGetStateByCountry,
//     watchGetCityByState,
//     watchGetDocumentType
// } from './masterDataSaga';

export default function* rootSaga() {
  yield all([
    // watchGetUser(),
    // watchSetUser(),
    // watchGetUserProfile(),
    // watchSetUserProfile(),
    // watchSetUserProfileCredential(),
    // // Master Data
    // watchGetCountry(),
    // watchGetDocumentType(),
    // watchGetStateByCountry(),
    // watchGetCityByState(),
  ]);
}
