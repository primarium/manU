import { expect } from 'chai'
import deepFreeze from 'deep-freeze';
import * as actions from '../actions/actions';
import reducer from './reducer';



describe('reducer', () => {
    const spaceName = 'testSpace';
    const testMemory = '20';
    const testDisk = '40';

    const space = {
        name: spaceName,
        diskquota_mb: testDisk,
        memoryquota_mb: testMemory
    }
    describe('CHANGE_VIEW', () => {
        it('sets the currentView in store to the passed in view', () => {
            // setup
            const fakeState = {
                currentView: 'Home',
            };
            const newView = 'NewSpace';
            deepFreeze(fakeState);
            const action = actions.changeViewCreator(newView);

            // exercise
            const actual = reducer(fakeState, action);

            // assert
            expect(actual.currentView).to.be.equal(newView);
        })
    });
    describe('CREATE_SPACE', () => {
        it('creates a space in the server with the provided details', () => {
            // setup
            const state = {
                spaces: [],
            };
            deepFreeze(state);

            const action = actions.createSpace(space);

            // exercise
            const actual = reducer(state, action);

            // assert
            expect(actual.spaces).to.have.lengthOf(1);
        })
    });
    describe('RETRIEVE_SPACES', () => {
        it('retrieves the spaces currently stored in the database and stores in spaces', () => {
            const actual = reducer(undefined, { type: actions.RETRIEVE_SPACES, payload: [1, 2, 3] });
            // assert
            expect(actual.spaces).to.have.lengthOf(3);

        });
    });

    describe('EDIT_SPACE', () => {
        it('changes the currentView to "EditSpace"', () => {
            // setup
            const newView = 'EditSpace';
            const fakeState = {
                currentView: 'Home',
            };
            deepFreeze(fakeState);
            const action = actions.goToSpace(space);

            // exercise
            const actual = reducer(fakeState, action);

            // assert
            expect(actual.currentView).to.be.equal(newView);
        })
    })
});