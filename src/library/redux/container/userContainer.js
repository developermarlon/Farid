import { connect } from 'react-redux';
import Component from 'screens/login';

import { 
    getUserAction,
    setUserEmptyAction
} from '../actions/userAction';

const mapStateToProps = (state) => {    
    return {        
        userStatus: state.userReducer,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUser: data => {
            dispatch(getUserAction(data))
        },
        onSetUserEmpty: () => {
            dispatch(setUserEmptyAction())
        } 
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Component);