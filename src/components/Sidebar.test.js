import { shallow } from 'enzyme';
import React from 'react';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    const spaceName = 'testSpace';
    const testMemory = '20';
    const testDisk = '40';
    const space = {
        id: 1,
        name: spaceName,
        diskquota_mb: testDisk,
        memoryquota_mb: testMemory
    }
    const spaces = [space]
    it('renders with an "Add Space" button', () => {
        // setup
        const sidebar = shallow(<Sidebar addNewSpace={jest.fn()} />);

        // assert
        expect(sidebar.find('#addSpaceBtn').text()).toEqual('Add Space');
    })
    it('should call the passed in changeView function with "AddSpace" when the "Add Space" button is clicked', () => {
        // setup
        const fake = jest.fn();
        const sidebar = shallow(<Sidebar changeView={fake} />);

        // exercise
        sidebar.find('#addSpaceBtn').simulate('click');

        // assert
        expect(fake).toBeCalledWith('AddSpace');

    })
    it('should render added spaces', () => {

        const renderSidebar = shallow(<Sidebar spaces={spaces} />)
        expect(renderSidebar.toExist)
        expect(renderSidebar.find('.spacesArray'))
        expect(renderSidebar.find('.spaceLink').text()).toEqual(spaceName + ' 0%')
    })
    it('each Space is clickable and fires a function', () => {

        // setup
        const fake = jest.fn();
        const sidebar = shallow(<Sidebar goToSpace={fake} spaces={spaces} />);

        //exercise
        sidebar.find('#space0').simulate('click')

        //assert
        expect(fake).toHaveBeenCalledTimes(1)
        expect(fake).toBeCalledWith(spaces[0])
    })
})
