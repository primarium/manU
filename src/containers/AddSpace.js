import { connect } from 'react-redux';
import AddSpace from '../components/AddSpace';
import * as actions from '../actions/actions'
const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createSpace: (space) => { dispatch(actions.createSpace(space)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSpace)