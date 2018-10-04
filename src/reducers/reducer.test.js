import { expect } from 'chai'
import deepFreeze from 'deep-freeze';
import * as actions from '../actions/actions';
import reducer from './reducer';



describe('reducer', () => {
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
            const spaceName = 'testSpace';
            const testMemory = '20';
            const testDisk = '40';
            deepFreeze(state);
            const space = {
                name: spaceName,
                diskquota_mb: testDisk,
                memoryquota_mb: testMemory
            }
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

        })
    })
});