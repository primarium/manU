import React, { Fragment } from 'react'

const Sidebar = ({ changeView, spaces, goToSpace }) => {
    const addNewSpace = () => {
        changeView('AddSpace')
    }

    const spacesToDisplay = () => {
        if (!spaces || spaces.length == 0) {
            return <div></div>
        }
        return <ul> {spaces.map((s, idx) => {
            return (
                <a id={'space' + idx} key={s.id} className='spaceLink' onClick={() => { goToSpace(s) }}>{s.name} 0%</a>
            )

        })}
        </ul>
    }
    return (

        <Fragment>
            {spacesToDisplay()}
            <button id='addSpaceBtn' onClick={addNewSpace}>Add Space</button>
        </Fragment>
    )
}


export default Sidebar;