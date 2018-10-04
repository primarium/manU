import { connect } from 'react-redux';
import Main from '../components/Main';
import { changeViewCreator } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        currentView: state.currentView,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)