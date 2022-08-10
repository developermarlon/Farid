import { connect } from 'react-redux';
import Component from 'screens/core/FormExecute';

// export default Component

import {
  getDataField,
  setDataField
} from '../actions/formAction';

const mapStateToProps = state => {
  return {
    formStatus: state.formReducer,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setDataField: data => {
      dispatch(setDataField(data))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);