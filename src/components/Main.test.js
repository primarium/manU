import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import Sidebar from '../containers/Sidebar';
import AddSpace from '../containers/AddSpace';

describe('homepage', () => {
    describe('"Home" view', () => {
        it('should contain a Sidebar component', () => {
            const main = shallow(<Main currentView='Home' updateSidebar={() => { }} />);

            expect(main.find(Sidebar)).toHaveLength(1);
        })


    })

    describe('"Add Space" view', () => {
        it('should display the "Add Space" view when currentView is "AddSpace"', () => {
            // setup
            const main = shallow(<Main currentView='AddSpace' updateSidebar={() => { }} />);

            // assert
            expect(main.find(AddSpace)).toHaveLength(1);
            expect(main.find(Sidebar)).toHaveLength(1);
        })
    })
})