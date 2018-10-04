import { shallow } from 'enzyme';
import React from 'react';
import AddSpace from './AddSpace';

describe('AddSpace', () => {
    it('should display the input fields required', () => {
        // setup
        const addSpace = shallow(<AddSpace />);

        // assert
        expect(addSpace.find('#newSpaceName')).toHaveLength(1);
        expect(addSpace.find('#newSpaceDisk')).toHaveLength(1);
        expect(addSpace.find('#newSpaceMemory')).toHaveLength(1);
        expect(addSpace.find('#createBtn')).toHaveLength(1);
        expect(addSpace.find('#createBtn').text()).toEqual('Create');
    })
    it('should handle local state change when typing in input boxes', () => {
        //setup
        const addSpace = shallow(<AddSpace />);

        //exercise
        const name = 'test space';
        const disk = '200';
        const mem = '300';
        addSpace.find('#newSpaceName').simulate('change', { target: { name: 'newSpaceName', value: name } });
        addSpace.find('#newSpaceDisk').simulate('change', { target: { name: 'newSpaceDisk', value: disk } });
        addSpace.find('#newSpaceMemory').simulate('change', { target: { name: 'newSpaceMemory', value: mem } });

        //assert
        expect(addSpace.state().newSpaceName).toEqual(name)
        expect(addSpace.state().newSpaceMemory).toEqual(mem)
        expect(addSpace.state().newSpaceDisk).toEqual(disk)
    })

    it('should fire the createSpace action passed in as prop when "Create" button is clicked', () => {
        //setup
        const fn = jest.fn();
        const addSpace = shallow(<AddSpace createSpace={fn} />);
        const name = 'test space';
        const disk = '200';
        const mem = '300';
        const space = {
            name,
            memoryquota_mb: mem,
            diskquota_mb: disk,
        }

        // exercise
        addSpace.find('#newSpaceName').simulate('change', { target: { name: 'newSpaceName', value: name } });
        addSpace.find('#newSpaceDisk').simulate('change', { target: { name: 'newSpaceDisk', value: disk } });
        addSpace.find('#newSpaceMemory').simulate('change', { target: { name: 'newSpaceMemory', value: mem } });
        addSpace.find('#createBtn').simulate('click');

        // assert
        expect(fn).toHaveBeenCalledWith(space)
    })
})