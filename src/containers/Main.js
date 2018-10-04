import { connect } from 'react-redux';
import Main from '../components/Main';
import { changeViewCreator } from '../actions/actions';
import * as actions from '../actions/actions'
const mapStateToProps = (state) => {
    return {
        currentView: state.currentView,
        selectedSpace: state.selectedSpace,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSidebar: () => { dispatch(actions.getSpaces()) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)