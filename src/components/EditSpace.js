import React, { Fragment, Component } from 'react'

class EditSpace extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            // <Fragment>
            <div id='space'>
                <h2 className='title'>{this.props.space.name}</h2>
                <div id='memory'>
                    <h3 className='heading'>
                        Memory
                    </h3>
                    <p className='dataSet'>
                        0/{this.props.space.memoryquota_mb}
                    </p>
                </div>
                <div id='disk'>
                    <h3 className='heading'>
                        Disk
                    </h3>
                    <p className='dataSet'>
                        0/{this.props.space.diskquota_mb}
                    </p>
                </div>
                <div id='appsSection'>
                    <h3 className='heading'>Apps:</h3>
                    <button id='addAppBtn'>Add App</button>
                </div>

            </div>
            // </Fragment>
        )
    }
}

export default EditSpace;