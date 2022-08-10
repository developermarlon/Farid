import {
  GET_DATA_FIELD,
  GET_DATE_FORM,
  RETORE_FORM,
  SET_DATA_FIELD
} from '../types/formType';

export const getDataField = data => {
  return {
    type: GET_DATA_FIELD,
    data
  }
}

export const restoreForm = data => {
  return {
    type: RETORE_FORM,
    data
  }
}

export const getDateForm = data => {
  return {
    type: GET_DATE_FORM,
    data
  }
}

export const setDataField = data => {
  try {
    return {
      type: SET_DATA_FIELD,
      data
    }
  } catch (e) {
    console.log(e)
  }
}