import React, { Fragment } from 'react';
import Sidebar from '../containers/Sidebar';
import AddSpace from '../containers/AddSpace';
import './Main.css';

const Main = ({ currentView, changeView, updateSidebar }) => {

    let viewPane = () => {
        return (
            <div></div>
        )
    }

    if (currentView === 'AddSpace') {
        viewPane = () => {
            return (
                <AddSpace />
            )
        }

    }

    updateSidebar();

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