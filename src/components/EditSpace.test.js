import { shallow } from 'enzyme';
import React from 'react';
import EditSpace from './EditSpace';

describe('EditSpace', () => {
    const spaceName = 'testSpace';
    const testMemory = '20';
    const testDisk = '40';
    const space = {
        id: 1,
        name: spaceName,
        diskquota_mb: testDisk,
        memoryquota_mb: testMemory
    }
    it('should render with the required elements', () => {
        // setup
        const editSpace = shallow(<EditSpace space={space} />);

        // exercise

        // assert
        expect(editSpace.find('#memory')).toHaveLength(1);
        expect(editSpace.find('#disk')).toHaveLength(1);

        expect(editSpace.find('#appsSection')).toHaveLength(1);
        expect(editSpace.find('#addAppBtn')).toHaveLength(1);
    })
    it('should be loaded with the data from a space', () => {

        // setup
        const editSpace = shallow(<EditSpace space={space} />);

        // exercise

        // assert
        expect(editSpace.find('#space').find('.title').text()).toEqual(space.name);

        expect(editSpace.find('#memory').find('.heading').text()).toEqual('Memory');
        expect(editSpace.find('#memory').find('.dataSet').text()).toEqual('0/' + space.memoryquota_mb);

        expect(editSpace.find('#disk').find('.heading').text()).toEqual('Disk');
        expect(editSpace.find('#disk').find('.dataSet').text()).toEqual('0/' + space.diskquota_mb);

        expect(editSpace.find('#appsSection').find('.heading').text()).toEqual('Apps:');
        expect(editSpace.find('#addAppBtn').text()).toEqual('Add App');
    })
})