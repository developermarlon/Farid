import  { connect } from 'react-redux';
import Component from 'library/navigation';


const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Component);