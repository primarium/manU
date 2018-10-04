import React, { Fragment } from 'react';
import Sidebar from '../containers/Sidebar';
import AddSpace from '../containers/AddSpace';
import './Main.css';
import EditSpace from './EditSpace';

const Main = ({ currentView, selectedSpace, updateSidebar }) => {

    let viewPane = () => {
        return (
            <div></div>
        )
    }
    if (selectedSpace) {
        viewPane = () => {
            return (
                <EditSpace space={selectedSpace} />
            )
        }
    }
    else if (currentView === 'AddSpace') {
        viewPane = () => {
            return (
                <AddSpace />
            )
        }

    } else {
        updateSidebar();
    }



    return (
        <div className='container'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='viewPane'>
                {viewPane()}
            </div>
        </div>
    )



}

export default Main