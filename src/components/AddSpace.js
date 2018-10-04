import React, { Fragment, Component } from 'react'

class AddSpace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newSpaceName: '',
            newSpaceMemory: '',
            newSpaceDisk: '',
        }
    }

    updateInput = (event) => {
        let newState = JSON.parse(JSON.stringify(this.state));
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {

        return (
            <Fragment>
                <h2>Create a new Space:</h2>
                <h4>Name</h4>
                <input id='newSpaceName' name='newSpaceName' value={this.state.newSpaceName} onChange={this.updateInput} />
                <br />
                <h4>Memory</h4>
                <input type='number' name='newSpaceMemory' placeholder='0' id='newSpaceMemory' onChange={this.updateInput} />
                <br />
                <h4>Disk</h4>
                <input type='number' name='newSpaceDisk' placeholder='0' id='newSpaceDisk' onChange={this.updateInput} />
                <br />
                <button id='createBtn' onClick={() => {
                    this.props.createSpace({
                        name: this.state.newSpaceName,
                        diskquota_mb: this.state.newSpaceDisk,
                        memoryquota_mb: this.state.newSpaceMemory
                    })
                }}>Create</button>
            </Fragment>
        )
    }
}

export default AddSpace;