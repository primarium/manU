import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { changeViewCreator, goToSpace } from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        spaces: state.spaces,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeView: (newView) => dispatch(changeViewCreator(newView)),
        goToSpace: (selectedSpace) => dispatch(goToSpace(selectedSpace))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)