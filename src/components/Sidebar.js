import React, { Fragment } from 'react'

const Sidebar = ({ changeView, spaces }) => {
    const addNewSpace = () => {
        changeView('AddSpace')
    }
    const spacesToDisplay = () => {
        if (!spaces || spaces.length == 0) {
            return <div></div>
        }
        return <ul> {spaces.map((s, idx) => {
            return (
                <li id={'space' + idx} key={s.id} className='spaceLink'>{s.name} 0%</li>
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